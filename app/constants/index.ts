export const EMAIL = "eng.omarfathy98697@gmail.com";
export const PHONE = "+201050605580";
export const ServiceId = "service_kxdhvdb";
export const Template = "template_3i15jgb";
export const PUBLI_KEY = ""; //ضيف ال key  account settings in email js webiste !
export const LOGOPATH = "/Hollow-Knight-Background-PNG-Image.png";
export const LOGOTEXT = "Omar";
// الشركات مثلا او التيكنولوجيز
export const TECH = ["/ts.svg"];
export const MAINCOLOR = "#ff3d00";

// الخدماااااااااااات
export const SERVICES = [
  {
    id: 1,
    title: "Machine Learning Model Development",
    des: `We design, train, and optimize ML models tailored to your business needs, from predictive analytics to recommendation systems.`,
    img: "/ml.png",
    gen: "Python, TensorFlow, PyTorch, Scikit-learn",
    features: [
      "Custom machine learning solutions for classification, regression, and clustering.",
      "Feature engineering and data preprocessing pipelines.",
      "Model optimization and hyperparameter tuning.",
      "Deployment-ready APIs and dashboards.",
      "Support for real-time inference and batch processing.",
    ],
    iconLists: ["/python.png", "/tf.png", "/pytorch.png", "/sklearn.png"],
    link: "https://your-portfolio-link.com/ml",
    git: "",
  },
  {
    id: 2,
    title: "Deep Learning & Computer Vision",
    des: `We build powerful deep learning systems for visual recognition, object detection, and image/video analytics.`,
    img: "/cv.png",
    gen: "PyTorch, TensorFlow, OpenCV, YOLO",
    features: [
      "Image classification, segmentation, and detection pipelines.",
      "Custom neural network architectures (CNNs, ResNet, EfficientNet).",
      "Real-time video processing and analytics.",
      "Edge AI solutions for mobile and IoT devices.",
    ],
    iconLists: ["/pytorch.png", "/opencv.png", "/yolo.png"],
    link: "https://your-portfolio-link.com/cv",
    git: "",
  },
  {
    id: 3,
    title: "Natural Language Processing (NLP)",
    des: `We create intelligent systems that understand, generate, and analyze human language.`,
    img: "/nlp.png",
    gen: "Transformers, Hugging Face, spaCy, NLTK",
    features: [
      "Text classification, sentiment analysis, and summarization.",
      "Chatbot and virtual assistant development.",
      "Information extraction and named entity recognition (NER).",
      "Custom language models fine-tuned for your domain.",
    ],
    iconLists: ["/huggingface.png", "/transformer.png", "/spacy.png"],
    link: "https://your-portfolio-link.com/nlp",
    git: "",
  },
  {
    id: 4,
    title: "AI Infrastructure & MLOps",
    des: `We streamline AI workflows with CI/CD for ML models, automated retraining, and cloud deployment.`,
    img: "/mlops.png",
    gen: "Docker, Kubernetes, AWS, MLflow",
    features: [
      "Model versioning, monitoring, and lifecycle management.",
      "Cloud-based deployment (AWS, GCP, Azure).",
      "Data pipeline automation and orchestration.",
      "Scalable inference endpoints with Kubernetes.",
    ],
    iconLists: ["/docker.png", "/k8s.png", "/aws.png", "/mlflow.png"],
    link: "https://your-portfolio-link.com/mlops",
    git: "",
  },
  {
    id: 5,
    title: "AI Research & Prototyping",
    des: `We explore cutting-edge AI techniques, building proof-of-concepts and research-driven prototypes for innovation.`,
    img: "/ai-research.png",
    gen: "PyTorch, TensorFlow, JAX",
    features: [
      "Exploratory data analysis and research.",
      "Rapid prototyping of AI ideas.",
      "Custom training on proprietary datasets.",
      "Benchmarking new architectures and frameworks.",
    ],
    iconLists: ["/jax.png", "/pytorch.png", "/tf.png"],
  },
];
// المشاااااااااااااااااااريع
/*
ياصورة يا صور كتير
img:"/اسم الصورة"

imgs:["/اسم الصورة",/اسم الصورة"]

*/

export interface Project {
  id: number;
  title: string;
  des?: string;
  img: string | string[];
  iconLists?: string[];
  link?: string;
  git?: string;
}
export const projects = [
  {
    id: 1,
    title: "Football Heatmap Classifier |<br> Striker vs Defender",
    des: `A deep learning project that classifies football players' positions (Striker or Defender) based on heatmaps. 
    Built a CNN model trained on 20,000 labeled images (10k Strikers, 10k Defenders) to automate position recognition.`,
    img: "/ddd.png",
    gen: "Python, TensorFlow, CNN",
    features: [
      "Collected and preprocessed 20,000 heatmap images.",
      "Built and trained a Convolutional Neural Network (CNN).",
      "Achieved 90%+ accuracy on validation set.",
      "Visualization of predictions with Grad-CAM.",
      "Deployed model with Streamlit for live testing.",
    ],
    iconLists: ["/python.png", "/tf.png", "/cv.png"],
  },
  {
    id: 2,
    title: "Real-time Drilling Operations Speech Recognition",
    des: `Customized Vosk speech recognition model to detect and adapt to specific drilling operation terms like 'Set Bit Depth' and 'Weight on Bit Options'. 
    Integrated into a real-time monitoring system for improved safety and automation.`,
    img: "/ssss.png",
    gen: "Python, Vosk, NLP",
    features: [
      "Trained Vosk with custom drilling terminology.",
      "Real-time speech-to-text processing.",
      "Adaptive recognition for noisy environments.",
      "Integrated anomaly alerts based on spoken commands.",
    ],
    iconLists: ["/python.png", "/nlp.png", "/vosk.png"],
  },
];
export default {
  projects,
  SERVICES,
  TECH,
};
