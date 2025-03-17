pipeline {
    agent any
    
    environment {
        IMAGE_NAME = "nextstep-frontend"
        IMAGE_TAG = "latest"
    }

    stages {
        stage('Clone Repository') {
            steps {
                git url: 'https://github.com/MisbahSubhani/NEXTSTEP.git', branch: 'main'
            }
        }

        stage('Build Docker Image') {
            steps {
                dir('Frontend') { // Navigate to frontend folder
                    sh 'docker build -t $IMAGE_NAME:$IMAGE_TAG .'
                }
            }
        }

        stage('Run Docker Container') {
    steps {
        sh '''
          docker rm -f nextstep-frontend-container || true
          docker run -d -p 3000:80 --name nextstep-frontend-container nextstep-frontend:latest
        '''
    }
}


    post {
        always {
            cleanWs()
        }
    }
}
