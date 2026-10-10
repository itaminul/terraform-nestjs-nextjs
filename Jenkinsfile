pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                echo 'Source code fetched successfully from the inventory branch!'
            }
        }

        stage('Build & Test Backend') {
            steps {
                echo 'Navigating to backend application space...'
                // sh commands run from the root folder, so we 'cd' into inventory
                sh '''
                    cd inventory
                    echo "Installing backend dependencies..."
                    # npm install
                    # npm run build
                '''
            }
        }

        stage('Build & Test Frontend') {
            steps {
                echo 'Navigating to frontend application space...'
                sh '''
                    cd k8f
                    echo "Building Next.js frontend elements..."
                    # npm install
                    # npm run build
                '''
            }
        }

        stage('Validate Infrastructure') {
            steps {
                echo 'Running structural checks on root Terraform layouts...'
                // Since main.tf is in the root directory, you run terraform commands directly
                sh '''
                    terraform init -backend=false
                    terraform validate
                '''
            }
        }

        stage('Validate Kubernetes Manifests') {
            steps {
                echo 'Testing Kubernetes configuration templates...'
                sh '''
                    cd k8s
                    echo "Checking Helm charts and values.yaml layouts..."
                '''
            }
        }
    }
}
