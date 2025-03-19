pipeline {
    agent any

    environment {
        DATABASE_URL = credentials('backend-db-url')
        JWT_SECRET = credentials('JWT_SECRET')
    }

    stage('Build Docker Image') {
    steps {
        dir('Backend') {
            script {
                sh 'docker build -f Dockerfile -t $BACKEND_IMAGE .'
            }
        }
    }
}


        stage('Stop & Remove Existing Container') {
            steps {
                sh '''
                docker stop nextstep-backend-container || true
                docker rm nextstep-backend-container || true
                '''
            }
        }

        stage('Run Container with Env Vars') {
            steps {
                sh '''
                docker run -d --name nextstep-backend-container \
                -p 3001:3001 \
                -e DATABASE_URL=$DATABASE_URL \
                -e JWT_SECRET=$JWT_SECRET \
                nextstep-backend-image
                '''
            }
        }
    }
}
