import React from 'react';
import firebase from 'firebase/app';
import { Container, Grid, Row, Panel, Col, Button, Icon, Alert } from 'rsuite';
import { auth, database } from '../misc/firebase';


const SignIn = () => {

    const signInWithProvider = async (provider) => {
        try {
            const { additionalUserInfo, user } = await auth.signInWithPopup(provider)
            
            if (additionalUserInfo.isNewUser){
                await database.ref(`/profiles/${user.uid}`).set({
                    name: user.displayName,
                    createdAt: firebase.database.ServerValue.TIMESTAMP
                })
            }
            Alert.success('Signed in', 4000)
        } catch (err) {
            Alert.info.error(err.message, 4000)
        }
        
    }

    const onFacebookSignIn = () => {
        signInWithProvider( new firebase.auth.FacebookAuthProvider() )
    }

    const onGoogleSignIn = () => {
        signInWithProvider( new firebase.auth.GoogleAuthProvider() )
    }

    return (
        <Container>
            <Grid>
                <Row>
                    <Col xs={24} md={12}>
                        <Panel>
                            <div>
                                <h2>Welcome to chat</h2>
                                <p>Chat platform</p>
                            </div>

                            <div>
                                <Button block color="blue" onClick={onFacebookSignIn}>
                                    <Icon icon="facebook"/> Continue with facebook
                                </Button>
                                <Button block color="blue" onClick={onGoogleSignIn}>
                                    <Icon icon="google"/> Continue with Google
                                </Button>
                            </div>
                        </Panel>
                    </Col>
                </Row>
            </Grid>
        </Container>
    )

}




export default SignIn;

