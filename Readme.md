# 📦 Full DevOps Portfolio Project — Architecture & Planning

## 🎯 מטרה

לבנות מערכת DevOps שלמה, מקצה לקצה, שתכלול:
- אפליקציית Microservice קטנה.
- תשתית Infrastructure as Code בענן AWS.
- CI/CD אוטומטי עם GitHub Actions.
- ניהול Docker Images ו-Artifacts ב-JFrog Artifactory.
- Kubernetes Cluster (AWS EKS).
- מערכת ניטור ולוגים עם Prometheus, Grafana, Loki.
- תיעוד ופרסום LinkedIn להצגת הפרויקט.

---

## 🧩 רכיבי המערכת

| רכיב                    | תיאור |
|--------------------------|---------|
| **GitHub**               | ניהול קוד ומימוש pipeline אוטומטי |
| **GitHub Actions**       | CI/CD pipeline: build, test, deploy |
| **Docker**               | אריזת האפליקציה ל-container |
| **JFrog Artifactory**    | ניהול Docker images ו-artifacts |
| **AWS EKS**              | Cluster מנוהל בענן להרצת Kubernetes |
| **Terraform**            | תשתיות כקוד (IaC) להקמת תשתית AWS |
| **Prometheus & Grafana** | ניטור תשתיות ואפליקציה |
| **Loki**                 | ניהול ואגרגציית לוגים |
| **Helm**                 | ניהול deployment לכלי ניטור |

---

## 🖥️ תרשים זרימת המערכת (Flow Diagram)

```plaintext
[ Developer (You) ]
       |
       v
[ GitHub Repository ] <--> [ GitHub Actions CI/CD Pipeline ]
       |                                 |
       |                                 v
       |                        [ JFrog Artifactory ]
       |                                 |
       v                                 v
[ Docker Image Build ]          [ Save Docker Images ]
       |
       v
[ Deploy to AWS EKS (Terraform infra) ]
       |
       v
[ Kubernetes Cluster ]
       |
       v
[ Application Pod ] ---> [ Monitoring with Prometheus & Grafana ]
       |
       +--> [ Logs to Loki ]