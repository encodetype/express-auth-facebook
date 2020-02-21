pipeline {
    agent { docker { image 'node:10.0' } }
    environment {
        HOME = '.'
    }
    stages {
        stage('check') {
            steps {
                sh 'npm --version'
            }
        }

        stage('init') {
            steps {
                sh 'npm install'
            }
        }

        stage('test'){
            steps {
                sh 'npm run test'
            }
        }
    }
}