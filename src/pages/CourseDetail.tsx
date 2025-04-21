
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import PageTransition from '@/components/PageTransition';
import VideoPlayer from '@/components/VideoPlayer';
import { getCourseById, getRelatedCourses } from '@/data/courses';
import { Calendar, Clock, BookOpen, Award, DollarSign, Users, ChevronDown, ChevronUp, Play } from 'lucide-react';
import CustomButton from '@/components/ui/custom-button';

const CourseDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [course, setCourse] = useState(id ? getCourseById(id) : undefined);
  const [relatedCourses, setRelatedCourses] = useState(id ? getRelatedCourses(id) : []);
  const [expandedSections, setExpandedSections] = useState<string[]>([]);
  
  useEffect(() => {
    if (id) {
      setCourse(getCourseById(id));
      setRelatedCourses(getRelatedCourses(id));
      window.scrollTo(0, 0);
    }
  }, [id]);
  
  const toggleSection = (sectionTitle: string) => {
    setExpandedSections(prev => 
      prev.includes(sectionTitle)
        ? prev.filter(title => title !== sectionTitle)
        : [...prev, sectionTitle]
    );
  };
  
  if (!course) {
    return (
      <PageTransition>
        <main className="min-h-screen pt-24 pb-20">
          <div className="container mx-auto px-6 text-center py-20">
            <h1 className="text-2xl font-bold mb-4">Course Not Found</h1>
            <p className="mb-8">The course you're looking for doesn't exist or has been removed.</p>
            <Link to="/courses">
              <CustomButton variant="primary">Browse All Courses</CustomButton>
            </Link>
          </div>
        </main>
      </PageTransition>
    );
  }
  
  return (
    <PageTransition>
      <main className="min-h-screen pt-24 pb-20">
        {/* Hero Section with Video */}
        <section className="bg-accent py-12">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-4">
                  <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm">
                    {course.category}
                  </span>
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold leading-tight">
                    {course.title}
                  </h1>
                  <p className="text-foreground/70 text-lg">
                    {course.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-4 text-sm text-foreground/70">
                    <div className="flex items-center">
                      <Users className="mr-2" size={16} />
                      <span>{course.studentsCount.toLocaleString()} students</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="mr-2" size={16} />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <BookOpen className="mr-2" size={16} />
                      <span>{course.lessons} lessons</span>
                    </div>
                    <div className="flex items-center">
                      <Award className="mr-2" size={16} />
                      <span>{course.level}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 pt-2">
                    <img 
                      src={course.instructor.avatar} 
                      alt={course.instructor.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-medium">{course.instructor.name}</p>
                      <p className="text-sm text-foreground/70">{course.instructor.title}</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <CustomButton 
                    variant="primary" 
                    size="lg"
                    fullWidth
                  >
                    Uzs {course.price.toFixed(2)}
                  </CustomButton>
                  
                  <CustomButton 
                    variant="outline" 
                    size="lg"
                    fullWidth
                  >
                    Try Free Preview
                  </CustomButton>
                </div>
              </div>
              
              <div>
                <VideoPlayer 
                  src={course.curriculum[0].lessons[0].videoUrl}
                  thumbnail={course.thumbnail}
                  title={course.curriculum[0].lessons[0].title}
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Course Content */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2">
                {/* About This Course */}
                <div className="mb-12">
                  <h2 className="text-2xl font-bold mb-6">Ushbu Kurs haqida</h2>
                  <p className="text-foreground/70 mb-6 leading-relaxed">
                    {course.longDescription}
                  </p>
                </div>
                
                {/* What You'll Learn */}
                <div className="mb-12 glass-card rounded-2xl p-8">
                  <h2 className="text-2xl font-bold mb-6">Nimani o'rganasiz</h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    {course.whatYouWillLearn.map((item, index) => (
                      <div key={index} className="flex">
                        <svg 
                          className="flex-shrink-0 w-6 h-6 text-primary mr-2" 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M5 13l4 4L19 7" 
                          />
                        </svg>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Course Curriculum */}
                <div className="mb-12">
                  <h2 className="text-2xl font-bold mb-6">Kurs dasturi</h2>
                  <div className="space-y-4">
                    {course.curriculum.map((section, sectionIndex) => (
                      <div key={sectionIndex} className="border border-border rounded-xl overflow-hidden">
                        <button 
                          className="w-full px-6 py-4 flex items-center justify-between bg-accent"
                          onClick={() => toggleSection(section.title)}
                        >
                          <div className="flex items-center">
                            <span className="mr-2 font-medium">Darslar{sectionIndex + 1}:</span>
                            <span className="font-bold">{section.title}</span>
                          </div>
                          {expandedSections.includes(section.title) ? (
                            <ChevronUp size={20} />
                          ) : (
                            <ChevronDown size={20} />
                          )}
                        </button>
                        
                        {expandedSections.includes(section.title) && (
                          <div className="divide-y divide-border">
                            {section.lessons.map((lesson, lessonIndex) => (
                              <div key={lessonIndex} className="px-6 py-3 flex items-center justify-between">
                                <div className="flex items-center">
                                  {lesson.preview ? (
                                    <button 
                                      className="mr-3 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary"
                                      aria-label="Play preview"
                                    >
                                      <Play size={14} />
                                    </button>
                                  ) : (
                                    <div className="mr-3 w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-muted-foreground">
                                      <Lock size={14} />
                                    </div>
                                  )}
                                  <span className={lesson.preview ? "" : "text-muted-foreground"}>
                                    {lesson.title}
                                  </span>
                                  {lesson.preview && (
                                    <span className="ml-2 px-2 py-0.5 text-xs rounded-full bg-secondary text-muted-foreground">
                                      Preview
                                    </span>
                                  )}
                                </div>
                                <span className="text-sm text-muted-foreground">{lesson.duration}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Requirements */}
                <div className="mb-12">
                  <h2 className="text-2xl font-bold mb-6">Talablar:</h2>
                  <ul className="list-disc pl-5 space-y-2 text-foreground/70">
                    {course.requirements.map((req, index) => (
                      <li key={index}>{req}</li>
                    ))}
                  </ul>
                </div>
                
                {/* Instructor */}
                <div className="mb-12 glass-card rounded-2xl p-8">
                  <h2 className="text-2xl font-bold mb-6">Your Instructor</h2>
                  <div className="flex flex-col md:flex-row md:items-center gap-6">
                    <img 
                      src={course.instructor.avatar} 
                      alt={course.instructor.name}
                      className="w-24 h-24 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="text-xl font-bold mb-1">{course.instructor.name}</h3>
                      <p className="text-primary mb-3">{course.instructor.title}</p>
                      <p className="text-foreground/70">{course.instructor.bio}</p>
                    </div>
                  </div>
                </div>
                
                {/* Student Reviews */}
                <div>
                  <h2 className="text-2xl font-bold mb-6">Student Reviews</h2>
                  {course.reviews.length > 0 ? (
                    <div className="space-y-6">
                      {course.reviews.map(review => (
                        <div key={review.id} className="border border-border rounded-xl p-6">
                          <div className="flex items-center mb-4">
                            <img 
                              src={review.avatar} 
                              alt={review.user}
                              className="w-12 h-12 rounded-full object-cover mr-4"
                            />
                            <div>
                              <h4 className="font-bold">{review.user}</h4>
                              <div className="flex items-center">
                                <div className="flex mr-2">
                                  {[...Array(5)].map((_, i) => (
                                    <svg 
                                      key={i} 
                                      className={`w-4 h-4 ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'}`} 
                                      fill="currentColor" 
                                      viewBox="0 0 20 20"
                                    >
                                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                  ))}
                                </div>
                                <span className="text-sm text-foreground/70">{review.date}</span>
                              </div>
                            </div>
                          </div>
                          <p className="text-foreground/70">{review.comment}</p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-foreground/70">No reviews yet. Be the first to review this course!</p>
                  )}
                </div>
              </div>
              
              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-28">
                  <div className="glass-card rounded-2xl p-6 mb-6">
                    <h3 className="text-xl font-bold mb-4">Kurs haqida ma'lumot:</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-foreground/70">Narx:</span>
                        <span className="font-bold">${course.price.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-foreground/70">Davomiyligi: </span>
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-foreground/70">Darslar:</span>
                        <span>{course.lessons}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-foreground/70">Daraja:</span>
                        <span>{course.level}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-foreground/70">O'quvchilar:</span>
                        <span>{course.studentsCount.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-foreground/70">Yaratilgan: :</span>
                        <span>{course.createdAt}</span>
                      </div>
                    </div>
                    
                    <div className="mt-6 space-y-3">
                      <CustomButton 
                        variant="primary" 
                        fullWidth
                      >
                        Enroll Now
                      </CustomButton>
                      <CustomButton 
                        variant="outline" 
                        fullWidth
                      >
                        Add to Wishlist
                      </CustomButton>
                    </div>
                  </div>
                  
                  {relatedCourses.length > 0 && (
                    <div>
                      <h3 className="text-xl font-bold mb-4">Related Courses</h3>
                      <div className="space-y-4">
                        {relatedCourses.map(relatedCourse => (
                          <Link 
                            key={relatedCourse.id} 
                            to={`/course/${relatedCourse.id}`}
                            className="block"
                          >
                            <div className="card-hover border border-border rounded-xl overflow-hidden flex">
                              <div className="w-1/3">
                                <img 
                                  src={relatedCourse.thumbnail} 
                                  alt={relatedCourse.title}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                              <div className="w-2/3 p-3">
                                <h4 className="font-bold text-sm line-clamp-2 mb-1">{relatedCourse.title}</h4>
                                <div className="flex items-center text-xs text-foreground/70">
                                  <DollarSign size={14} className="mr-1" />
                                  <span>${relatedCourse.price.toFixed(2)}</span>
                                </div>
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </PageTransition>
  );
};

// Lock icon component
const Lock = ({ size }: { size: number }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);

export default CourseDetail;
