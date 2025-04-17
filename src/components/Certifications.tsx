import { Award, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
const CertificationCard = ({
  title,
  organization,
  date,
  icon,
  color,
  verifyUrl
}) => <div className="card-github hover-effect p-6 flex flex-col justify-between bg-zinc-900">
    <div>
      <div className="flex items-center mb-4">
        <div className={`p-3 rounded-full mr-4 ${color}`}>
          <Award size={24} className="text-white" />
        </div>
        <h3 className="font-bold text-xl">{title}</h3>
      </div>
      
      <p className="text-github-muted mb-1">{organization}</p>
      <p className="text-sm font-mono text-github-muted mb-4">{date}</p>
      
      <div className="flex items-center">
        <img src={icon} alt={organization} className="w-10 h-10 object-contain mr-3" />
        <div className="text-sm text-github-text">
          Verified credential
        </div>
      </div>
    </div>

    {verifyUrl && <div className="mt-4">
        <a href={verifyUrl} target="_blank" rel="noopener noreferrer">
          <Button size="sm" variant="outline" className="w-full border-github-border hover:bg-card text-orange-800">
            <ExternalLink size={16} className="mr-2" />
            Verify
          </Button>
        </a>
      </div>}
  </div>;
const Certifications = () => {
  const certifications = [{
    title: "TensorFlow Developer Certification",
    organization: "TensorFlow",
    date: "June 2023",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Tensorflow_logo.svg/1200px-Tensorflow_logo.svg.png",
    color: "bg-orange-600",
    verifyUrl: "#"
  }, {
    title: "Professional Machine Learning Engineer",
    organization: "Google Cloud",
    date: "August 2023",
    icon: "https://www.gstatic.com/devrel-devsite/prod/vdbc400b97a86c8815ab6ee057e8dc91626aee8cf89b10f7d89037e5a33539f53/cloud/images/favicons/onecloud/super_cloud.png",
    color: "bg-blue-500",
    verifyUrl: "#"
  }, {
    title: "AWS Cloud Practitioner",
    organization: "Amazon Web Services",
    date: "May 2023",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1280px-Amazon_Web_Services_Logo.svg.png",
    color: "bg-yellow-600",
    verifyUrl: "#"
  }, {
    title: "Google Cloud Digital Leader",
    organization: "Google Cloud",
    date: "July 2023",
    icon: "https://www.gstatic.com/devrel-devsite/prod/vdbc400b97a86c8815ab6ee057e8dc91626aee8cf89b10f7d89037e5a33539f53/cloud/images/favicons/onecloud/super_cloud.png",
    color: "bg-green-600",
    verifyUrl: "#"
  }];
  return <section id="certifications" className="section-container">
      <h2 className="section-title">Certifications</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
        {certifications.map((certification, index) => <div key={certification.title} className="animate-fade-in" style={{
        animationDelay: `${0.1 * (index + 1)}s`
      }}>
            <CertificationCard {...certification} />
          </div>)}
      </div>
    </section>;
};
export default Certifications;