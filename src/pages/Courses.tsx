
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import PageTransition from '@/components/PageTransition';
import CourseCard from '@/components/CourseCard';
import { courses, getCategories } from '@/data/courses';
import { Filter, Search } from 'lucide-react';

const Courses = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filteredCourses, setFilteredCourses] = useState(courses);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedLevel, setSelectedLevel] = useState<string>('');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 200]);
  const [showFilters, setShowFilters] = useState(false);
  
  const categories = getCategories();
  const levels = ['Beginner', 'Intermediate', 'Advanced'];
  
  useEffect(() => {
    const category = searchParams.get('category') || '';
    setSelectedCategory(category);
  }, [searchParams]);
  
  useEffect(() => {
    let result = [...courses];
    
    // Filter by search term
    if (searchTerm) {
      result = result.filter(course => 
        course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Filter by category
    if (selectedCategory) {
      result = result.filter(course => course.category === selectedCategory);
    }
    
    // Filter by level
    if (selectedLevel) {
      result = result.filter(course => course.level === selectedLevel);
    }
    
    // Filter by price range
    result = result.filter(course => 
      course.price >= priceRange[0] && course.price <= priceRange[1]
    );
    
    setFilteredCourses(result);
  }, [searchTerm, selectedCategory, selectedLevel, priceRange]);
  
  const handleCategoryChange = (category: string) => {
    if (selectedCategory === category) {
      setSelectedCategory('');
      searchParams.delete('category');
    } else {
      setSelectedCategory(category);
      searchParams.set('category', category);
    }
    setSearchParams(searchParams);
  };
  
  const handleLevelChange = (level: string) => {
    setSelectedLevel(selectedLevel === level ? '' : level);
  };
  
  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    setPriceRange([priceRange[0], value]);
  };
  
  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('');
    setSelectedLevel('');
    setPriceRange([0, 200]);
    setSearchParams({});
  };
  
  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };
  
  return (
    <PageTransition>
      <main className="min-h-screen pt-24 pb-20">
        {/* Course Header */}
        <section className="bg-accent py-12">
          <div className="container mx-auto px-6">
            <div className="text-center mb-8">
              <h1 className="text-3xl md:text-4xl font-display font-bold mb-4">Discover Our Courses</h1>
              <p className="text-foreground/70 max-w-2xl mx-auto">
                Browse our diverse range of high-quality courses designed to help you achieve your learning goals.
              </p>
            </div>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for courses..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-5 py-3 pr-12 rounded-full border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
              </div>
            </div>
          </div>
        </section>
        
        <div className="container mx-auto px-6 py-12">
          <div className="md:flex md:space-x-8">
            {/* Filter Section - Mobile Toggle */}
            <button 
              className="md:hidden w-full flex items-center justify-center space-x-2 p-3 mb-6 rounded-lg border border-border"
              onClick={toggleFilters}
            >
              <Filter size={18} />
              <span>{showFilters ? 'Hide Filters' : 'Show Filters'}</span>
            </button>
            
            {/* Filter Section */}
            <div className={`md:w-1/4 space-y-8 ${showFilters ? 'block' : 'hidden'} md:block`}>
              <div>
                <h3 className="text-lg font-bold mb-4">Categories</h3>
                <div className="space-y-2">
                  {categories.map(category => (
                    <div key={category} className="flex items-center">
                      <button
                        onClick={() => handleCategoryChange(category)}
                        className={`px-3 py-1.5 rounded-full text-sm font-medium w-full text-left ${
                          selectedCategory === category 
                            ? 'bg-primary text-white' 
                            : 'bg-secondary text-foreground/70 hover:bg-secondary/80'
                        }`}
                      >
                        {category}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-bold mb-4">Level</h3>
                <div className="space-y-2">
                  {levels.map(level => (
                    <div key={level} className="flex items-center">
                      <button
                        onClick={() => handleLevelChange(level)}
                        className={`px-3 py-1.5 rounded-full text-sm font-medium w-full text-left ${
                          selectedLevel === level 
                            ? 'bg-primary text-white' 
                            : 'bg-secondary text-foreground/70 hover:bg-secondary/80'
                        }`}
                      >
                        {level}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-bold mb-4">Price Range</h3>
                <div className="px-1">
                  <input
                    type="range"
                    min="0"
                    max="200"
                    value={priceRange[1]}
                    onChange={handlePriceChange}
                    className="w-full h-2 bg-secondary rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between mt-2 text-sm text-foreground/70">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>
              </div>
              
              <button
                onClick={clearFilters}
                className="w-full px-4 py-2 bg-secondary text-foreground/70 hover:bg-secondary/80 rounded-lg text-sm font-medium"
              >
                Clear Filters
              </button>
            </div>
            
            {/* Course Grid */}
            <div className="md:w-3/4">
              {filteredCourses.length > 0 ? (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredCourses.map((course, index) => (
                    <CourseCard 
                      key={course.id}
                      id={course.id}
                      title={course.title}
                      description={course.description}
                      category={course.category}
                      thumbnail={course.thumbnail}
                      price={course.price}
                      duration={course.duration}
                      studentsCount={course.studentsCount}
                      delay={index}
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <h3 className="text-xl font-bold mb-2">No courses found</h3>
                  <p className="text-foreground/70">
                    Try adjusting your filters or search term to find what you're looking for.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </PageTransition>
  );
};

export default Courses;
