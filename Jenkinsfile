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

        stage('build'){
            steps {
                sh 'echo fake_build'
            }
        }

        stage('deploy'){
            steps {
                sh 'echo fake_deploy'
            }
        }

        stage('done'){
            steps {
                sh 'echo fake_done'
            }
        }
    }
}