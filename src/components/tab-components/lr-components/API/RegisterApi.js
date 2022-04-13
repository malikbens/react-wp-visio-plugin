import React, { useEffect, useState } from "react";

function RegisterApi(props) {
    const [urlToLogin, setUrlToLogin] = useState('')

    useEffect(() => {
        if (props.APIDetailsSignUp.user.length > 0) {
            let formData = new FormData()
            formData.append('user', props.APIDetailsSignUp.user)
            formData.append('email', props.APIDetailsSignUp.email)
            formData.append('password', props.APIDetailsSignUp.pass)
            formData.append('authkey', 'abc123')

            const url = 'http://localhost/wordpress/?rest_route=/simple-jwt-login/v1/users'
            fetch(url, {
                method: 'POST',
                body: formData
            })
                .then((response) => response.json()) //json
                .then((data) => {
                    if (data['success']===true){
                        localStorage.setItem('jwt', data['jwt'])
                        setUrlToLogin(`http://localhost/wordpress/?rest_route=/simple-jwt-login/v1/autologin&jwt=${data['jwt']}`)
                        console.log(data)
                        console.log(data['jwt'])
                    }
                    else{
                        console.log(data)
                        console.log(data['data']['message'])
                        props.setServerMessage(data['data']['message'])
                    }
                })
        }
    }, [props.APIDetailsSignUp])

    useEffect(() => {
        if (urlToLogin.length > 0) {
            fetch(urlToLogin, {
                method: 'GET'
            })
                .then((response) => {
                    if (response.status == '200') {
                        props.setIsLoggedIn()
                        props.setUsername(props.APIDetailsSignUp.user)
                        props.nextStep()
                    }
                    else {
                        console.log('error')
                    }
                })
        }

    }, [urlToLogin])

    return (
        <>
        </>
    )

}

export default RegisterApi