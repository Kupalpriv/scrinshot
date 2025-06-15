import React, { useEffect, useState } from 'react';
import { Facebook, Github, Twitter, Linkedin, Mail, Phone, MapPin, Code, Coffee, Heart, Star, Zap, Award, Users, Globe, ArrowUp, Send, CheckCircle, Calendar, Briefcase, GraduationCap, Target, TrendingUp, Shield, Clock, Database, Server, Smartphone, Laptop, Palette, Lightbulb, Rocket, Settings, BarChart3, PieChart, Activity, Cpu, HardDrive, Wifi, Lock, Key, Cloud, Archive, FileText, Image, Video, Music, Download, Upload, Share2, Link, Eye, EyeOff, Search, Filter, SortAsc as Sort, Grid, List, Menu, X, Plus, Minus, Edit, Trash2, Save, RefreshCw, Play, Pause, Store as Stop, SkipBack, SkipForward, Volume2, VolumeX, Maximize, Minimize, RotateCcw, RotateCw, ZoomIn, ZoomOut, Move, Copy, Scissors, Clipboard, BookOpen, Bookmark, Tag, Flag, Bell, MessageCircle, MessageSquare, Inbox, Mails, UserPlus, UserMinus, UserCheck, UserX, Users2, Crown, Gem, Diamond, Hexagon, Triangle, Square, Circle, Octagon, Pentagon } from 'lucide-react';

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  const skills = [
    { name: 'React', level: 95, icon: Code },
    { name: 'Node.js', level: 90, icon: Server },
    { name: 'TypeScript', level: 88, icon: Database },
    { name: 'Python', level: 85, icon: Cpu },
    { name: 'MongoDB', level: 92, icon: HardDrive },
    { name: 'AWS', level: 80, icon: Cloud },
    { name: 'Docker', level: 75, icon: Archive },
    { name: 'GraphQL', level: 78, icon: Activity }
  ];

  const projects = [
    {
      name: 'E-commerce Platform',
      description: 'Full-stack e-commerce solution with React and Node.js',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      status: 'Completed',
      icon: Briefcase
    },
    {
      name: 'Task Management App',
      description: 'Collaborative task management with real-time updates',
      tech: ['Vue.js', 'Socket.io', 'PostgreSQL'],
      status: 'In Progress',
      icon: Target
    },
    {
      name: 'Analytics Dashboard',
      description: 'Business intelligence dashboard with data visualization',
      tech: ['React', 'D3.js', 'Express', 'MySQL'],
      status: 'Completed',
      icon: BarChart3
    },
    {
      name: 'Mobile Banking App',
      description: 'Secure mobile banking application with biometric auth',
      tech: ['React Native', 'Firebase', 'Blockchain'],
      status: 'Completed',
      icon: Smartphone
    }
  ];

  const achievements = [
    {
      title: 'AWS Certified Solutions Architect',
      year: '2023',
      organization: 'Amazon Web Services',
      icon: Award
    },
    {
      title: 'Google Cloud Professional Developer',
      year: '2023',
      organization: 'Google Cloud',
      icon: Cloud
    },
    {
      title: 'Microsoft Azure Developer Associate',
      year: '2022',
      organization: 'Microsoft',
      icon: Shield
    },
    {
      title: 'Top 1% Developer on Stack Overflow',
      year: '2022',
      organization: 'Stack Overflow',
      icon: Star
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CTO at TechStart',
      comment: 'Churchill delivered exceptional work on our platform. His attention to detail and technical expertise exceeded our expectations.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Product Manager at InnovateCorp',
      comment: 'Working with Churchill was a game-changer for our project. He brings both technical skills and creative problem-solving.',
      rating: 5
    },
    {
      name: 'Emma Rodriguez',
      role: 'Startup Founder',
      comment: 'Churchill helped us build our MVP from scratch. His full-stack expertise and dedication were instrumental to our success.',
      rating: 5
    }
  ];

  const socialStats = [
    { platform: 'GitHub', followers: '12.5K', icon: Github },
    { platform: 'LinkedIn', connections: '8.2K', icon: Linkedin },
    { platform: 'Twitter', followers: '15.3K', icon: Twitter },
    { platform: 'Facebook', friends: '3.8K', icon: Facebook }
  ];

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setIsSubscribed(true);
      setNewsletterEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const currentTime = new Date().toLocaleTimeString();
  const currentDate = new Date().toLocaleDateString();

  return (
    <footer className="churchill-footer">
      <div className="footer-aurora"></div>
      <div className="footer-particles">
        {[...Array(30)].map((_, i) => (
          <div key={i} className="footer-particle" style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 10}s`,
            animationDuration: `${Math.random() * 5 + 5}s`
          }}></div>
        ))}
      </div>

      <div className="footer-container">
        <div className="footer-hero">
          <div className="developer-card">
            <div className="developer-avatar">
              <div className="avatar-ring"></div>
              <div className="avatar-image">
                <Code className="avatar-icon" />
              </div>
              <div className="avatar-status"></div>
            </div>
            
            <div className="developer-info">
              <h2 className="developer-name">
                Churchill <span className="name-accent">Dev</span>
              </h2>
              <p className="developer-title">nega ownirsv2 mimbir</p>
              <div className="developer-location">
                <MapPin className="location-icon" />
                <span>Philippines</span>
                <div className="timezone">
                  <Clock className="time-icon" />
                  <span>{currentTime}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-icon-container">
                <Briefcase className="stat-icon" />
              </div>
              <div className="stat-content">
                <span className="stat-number">50+</span>
                <span className="stat-label">Projects Completed</span>
              </div>
            </div>
            
            <div className="stat-item">
              <div className="stat-icon-container">
                <Users className="stat-icon" />
              </div>
              <div className="stat-content">
                <span className="stat-number">100+</span>
                <span className="stat-label">Happy Clients</span>
              </div>
            </div>
            
            <div className="stat-item">
              <div className="stat-icon-container">
                <Coffee className="stat-icon" />
              </div>
              <div className="stat-content">
                <span className="stat-number">∞</span>
                <span className="stat-label">Cups of Coffee</span>
              </div>
            </div>
            
            <div className="stat-item">
              <div className="stat-icon-container">
                <Award className="stat-icon" />
              </div>
              <div className="stat-content">
                <span className="stat-number">5+</span>
                <span className="stat-label">Years Experience</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-content">
          <div className="footer-section about-section">
            <h3 className="section-title">
              <Lightbulb className="title-icon" />
              About Churchill
            </h3>
            <p className="about-text">
              Passionate full-stack developer with expertise in modern web technologies. 
              I specialize in creating scalable, user-friendly applications that solve real-world problems. 
              With a strong foundation in both frontend and backend development, I bring ideas to life through clean, efficient code.
            </p>
            
            <div className="expertise-tags">
              {['React', 'Node.js', 'Python', 'AWS', 'MongoDB', 'TypeScript', 'Docker', 'GraphQL'].map((tech) => (
                <span key={tech} className="expertise-tag">{tech}</span>
              ))}
            </div>

            <div className="contact-info">
              <div className="contact-item">
                <Mail className="contact-icon" />
                <span>churchillabing100@gmailcom</span>
              </div>
              <div className="contact-item">
                <Phone className="contact-icon" />
                <span>+63 secret</span>
              </div>
              <div className="contact-item">
                <Globe className="contact-icon" />
                <span>tyortyil abinega</span>
              </div>
            </div>
          </div>

          <div className="footer-section skills-section">
            <h3 className="section-title">
              <Target className="title-icon" />
              Technical Skills
            </h3>
            <div className="skills-container">
              {skills.map((skill) => {
                const IconComponent = skill.icon;
                return (
                  <div key={skill.name} className="skill-item">
                    <div className="skill-header">
                      <IconComponent className="skill-icon" />
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="footer-section projects-section">
            <h3 className="section-title">
              <Rocket className="title-icon" />
              Featured Projects
            </h3>
            <div className="projects-container">
              {projects.map((project, index) => {
                const IconComponent = project.icon;
                return (
                  <div key={index} className="project-card">
                    <div className="project-header">
                      <IconComponent className="project-icon" />
                      <div className="project-info">
                        <h4 className="project-name">{project.name}</h4>
                        <span className={`project-status ${project.status.toLowerCase().replace(' ', '-')}`}>
                          {project.status}
                        </span>
                      </div>
                    </div>
                    <p className="project-description">{project.description}</p>
                    <div className="project-tech">
                      {project.tech.map((tech) => (
                        <span key={tech} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="footer-section achievements-section">
            <h3 className="section-title">
              <Award className="title-icon" />
              Certifications & Achievements
            </h3>
            <div className="achievements-container">
              {achievements.map((achievement, index) => {
                const IconComponent = achievement.icon;
                return (
                  <div key={index} className="achievement-item">
                    <div className="achievement-icon-container">
                      <IconComponent className="achievement-icon" />
                    </div>
                    <div className="achievement-content">
                      <h4 className="achievement-title">{achievement.title}</h4>
                      <p className="achievement-org">{achievement.organization}</p>
                      <span className="achievement-year">{achievement.year}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="footer-section testimonials-section">
            <h3 className="section-title">
              <MessageCircle className="title-icon" />
              Client Testimonials
            </h3>
            <div className="testimonials-container">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="testimonial-card">
                  <div className="testimonial-rating">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="rating-star filled" />
                    ))}
                  </div>
                  <p className="testimonial-comment">"{testimonial.comment}"</p>
                  <div className="testimonial-author">
                    <strong className="author-name">{testimonial.name}</strong>
                    <span className="author-role">{testimonial.role}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="footer-section social-section">
            <h3 className="section-title">
              <Users className="title-icon" />
              Connect With Me
            </h3>
            
            <div className="social-stats">
              {socialStats.map((stat) => {
                const IconComponent = stat.icon;
                return (
                  <div key={stat.platform} className="social-stat">
                    <IconComponent className="social-stat-icon" />
                    <div className="social-stat-content">
                      <span className="social-stat-number">{stat.followers}</span>
                      <span className="social-stat-platform">{stat.platform}</span>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="social-links">
              <a 
                href="https://www.facebook.com/Churchill.Dev4100" 
                className="social-link facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="social-icon" />
                <span className="social-label">Facebook</span>
              </a>
              <a href="#" className="social-link github">
                <Github className="social-icon" />
                <span className="social-label">GitHub</span>
              </a>
              <a href="#" className="social-link linkedin">
                <Linkedin className="social-icon" />
                <span className="social-label">LinkedIn</span>
              </a>
              <a href="#" className="social-link twitter">
                <Twitter className="social-icon" />
                <span className="social-label">Twitter</span>
              </a>
              <a href="mailto:churchill.dev@example.com" className="social-link email">
                <Mail className="social-icon" />
                <span className="social-label">Email</span>
              </a>
            </div>
          </div>

          <div className="footer-section newsletter-section">
            <h3 className="section-title">
              <Send className="title-icon" />
              Stay Updated
            </h3>
            <p className="newsletter-description">
              Subscribe to get the latest updates on my projects, tutorials, and tech insights.
            </p>
            
            <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
              <div className="newsletter-input-group">
                <Mail className="newsletter-icon" />
                <input
                  type="email"
                  className="newsletter-input"
                  placeholder="Enter your email address"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  required
                />
                <button type="submit" className="newsletter-button">
                  <Send className="button-icon" />
                </button>
              </div>
              {isSubscribed && (
                <div className="newsletter-success">
                  <CheckCircle className="success-icon" />
                  <span>Thank you for subscribing!</span>
                </div>
              )}
            </form>

            <div className="newsletter-benefits">
              <div className="benefit-item">
                <Zap className="benefit-icon" />
                <span>Weekly tech insights</span>
              </div>
              <div className="benefit-item">
                <Code className="benefit-icon" />
                <span>Project updates</span>
              </div>
              <div className="benefit-item">
                <BookOpen className="benefit-icon" />
                <span>Free tutorials</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-timeline">
          <h3 className="timeline-title">
            <Calendar className="title-icon" />
            Professional Journey
          </h3>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <span className="timeline-year">2024</span>
                <h4 className="timeline-title-text">Senior Full Stack Developer</h4>
                <p className="timeline-description">Leading development of enterprise-level applications</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <span className="timeline-year">2023</span>
                <h4 className="timeline-title-text">AWS Solutions Architect Certified</h4>
                <p className="timeline-description">Achieved professional cloud architecture certification</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <span className="timeline-year">2022</span>
                <h4 className="timeline-title-text">Freelance Developer</h4>
                <p className="timeline-description">Started independent consulting and development services</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <span className="timeline-year">2020</span>
                <h4 className="timeline-title-text">Junior Developer</h4>
                <p className="timeline-description">Began professional software development career</p>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <div className="copyright">
              <Heart className="heart-icon" />
              <span>
                Made with passion by <strong>Churchill Dev</strong> • {currentYear}
              </span>
            </div>
            
            <div className="footer-links">
              <a href="#privacy" className="footer-link">Privacy Policy</a>
              <a href="#terms" className="footer-link">Terms of Service</a>
              <a href="#cookies" className="footer-link">Cookie Policy</a>
              <a href="#sitemap" className="footer-link">Sitemap</a>
            </div>

            <button className="scroll-to-top" onClick={scrollToTop}>
              <ArrowUp className="scroll-icon" />
            </button>
          </div>
        </div>
      </div>

      <div className="footer-overlay"></div>
    </footer>
  );
};

export default Footer;
