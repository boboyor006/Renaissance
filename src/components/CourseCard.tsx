
import { motion } from 'framer-motion';
import { Clock, DollarSign, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CourseCardProps {
  id: string;
  title: string;
  description: string;
  category: string;
  thumbnail: string;
  price: number;
  duration: string;
  studentsCount: number;
  delay?: number;
}

const CourseCard: React.FC<CourseCardProps> = ({
  id,
  title,
  description,
  category,
  thumbnail,
  price,
  duration,
  studentsCount,
  delay = 0
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
    >
      <Link to={`/course/${id}`} className="block h-full">
        <div className="card-hover glass-card h-full rounded-2xl overflow-hidden">
          <div className="img-zoom relative aspect-video">
            <div className="absolute top-3 left-3 z-10 px-3 py-1 rounded-full text-xs font-medium bg-primary/90 text-white">
              {category}
            </div>
            <img 
              src={thumbnail} 
              alt={title} 
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2 line-clamp-2">{title}</h3>
            <p className="text-foreground/70 mb-4 text-sm line-clamp-2">{description}</p>
            
            <div className="flex items-center justify-between text-sm mb-3">
              <div className="flex items-center text-muted-foreground">
                <Clock size={16} className="mr-1.5" />
                <span>{duration}</span>
              </div>
              <div className="flex items-center text-muted-foreground">
                <Users size={16} className="mr-1.5" />
                <span>{studentsCount.toLocaleString()} o'quvchilar</span>
              </div>
            </div>
            
            <div className="flex items-center justify-between mt-2">
              <div className="flex items-center text-primary font-bold">
                <DollarSign size={18} className="mr-1" />
                <span className="text-xl">${price}</span>
              </div>
              <button className="btn-hover px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm">
                View Details
              </button>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default CourseCard;
