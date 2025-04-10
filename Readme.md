# 🚀 DevOps Portfolio Project — Full CI/CD with AWS, EKS, Docker, and Monitoring

## 📖 Overview

This project demonstrates a complete DevOps pipeline for a containerized microservice application, deployed to AWS EKS with automated CI/CD, artifact management, and full observability.

✅ **CI/CD**: GitHub Actions  
✅ **Containerization**: Docker  
✅ **Artifact Management**: JFrog Artifactory + DockerHub  
✅ **Infrastructure as Code**: Terraform  
✅ **Kubernetes Cluster**: AWS EKS  
✅ **Monitoring & Logs**: Prometheus, Grafana, Loki  
✅ **Automated Deployment**: Push to main triggers deploy to EKS

---

## 📦 Technologies Stack

| Category                  | Tools and Services |
|---------------------------|--------------------|
| CI/CD                     | GitHub Actions |
| Containerization          | Docker |
| Artifact Repository       | JFrog Artifactory, DockerHub |
| Infrastructure as Code    | Terraform |
| Kubernetes Cluster        | AWS EKS |
| Monitoring & Observability| Prometheus, Grafana, Loki |
| Cloud Provider            | AWS |

---

## 🛠️ Architecture

> ![Architecture Diagram](link-to-your-diagram)

> *(Replace `link-to-your-diagram` with your actual diagram link or relative path)*

---

## 🔁 Flow

```
Push to main branch
        |
GitHub Actions Pipeline
        |
Docker Build & Push (JFrog + DockerHub)
        |
Deploy to AWS EKS via kubectl
        |
App running in Kubernetes Cluster
        |
Monitoring: Prometheus + Grafana + Loki
```

---

## 📊 Monitoring Dashboard

> ![Grafana Dashboard](link-to-your-grafana-screenshot)

> *(Replace `link-to-your-grafana-screenshot` with your actual screenshot link)*

---

## 🚀 Getting Started

### Prerequisites

- AWS account
- DockerHub & JFrog accounts
- Terraform installed
- kubectl & AWS CLI configured
- Helm installed
- GitHub repository configured with Secrets

### Deployment Steps

1. **Fork and clone this repository**
2. **Setup AWS infrastructure**
   ```bash
   cd infrastructure
   terraform init
   terraform apply
   ```

3. **Push your changes to `main` branch**
   - GitHub Actions will build Docker image, push to registries, and deploy to EKS automatically.

4. **Access your application**
   - Use AWS LoadBalancer DNS or Ingress URL from `kubectl get ingress`.

5. **Access Grafana Dashboard**
   - Port-forward Grafana service:
     ```bash
     kubectl port-forward svc/prometheus-grafana 3000:80
     ```
   - Visit: `http://localhost:3000`
   - Default credentials:
     - Username: `admin`
     - Password: `prom-operator`

---

## 🤖 Automation

- **GitHub Actions Pipeline**
  - Build Docker image with Git commit tag
  - Push Docker image to DockerHub & JFrog
  - Deploy new image to AWS EKS
  - Monitor rollout status

- **Monitoring**
  - Real-time system monitoring with Prometheus and Grafana
  - Centralized logging with Loki

---

## 🎯 Outcomes

- ✅ Full DevOps pipeline automated from code to production
- ✅ Infrastructure provisioned and maintained as code
- ✅ Centralized monitoring and observability setup
- ✅ Portfolio-ready project for LinkedIn and GitHub

---

## 🙌 Contribution

If you like this project, feel free to fork, improve, and share!

---

## 📄 License

MIT License

---

## 📌 Additional Notes

- 🎨 *Consider customizing Grafana dashboards for enhanced visualization.*
- 📈 *Capture and upload screenshots of dashboards for your README and LinkedIn.*
- 🔒 *Always keep your credentials secure by using GitHub Actions Secrets.*

---

## 🔗 Connect with Me

- LinkedIn: [Your LinkedIn Profile](https://www.linkedin.com/in/your-profile/)
- GitHub: [Your GitHub Profile](https://github.com/your-profile)

---