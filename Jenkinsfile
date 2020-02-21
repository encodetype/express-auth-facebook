pipeline {
    agent { docker { image 'node:10.0' } }
    stages {
        stage('check') {
            steps {
                sh 'npm --version'
            }
        }

        stage('init') {
            steps {
                sh 'sudo npm install'
            }
        }

        stage('test'){
            steps {
                sh 'npm run test'
            }
        }
    }
}