import React, { useState, useEffect } from 'react';
import { Camera, Download, Share2, Globe, Smartphone, Tablet, Monitor, Zap, Star, CheckCircle, AlertCircle, Loader } from 'lucide-react';
import Footer from './components/Footer.jsx';

function App() {
  const [url, setUrl] = useState('');
  const [screenshot, setScreenshot] = useState(null);
  const [loading, setLoading] = useState(false);
  const [dimension, setDimension] = useState('1920x1080');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const dimensions = [
    { label: 'Desktop Full HD', value: '1920x1080', icon: Monitor },
    { label: 'Desktop Standard', value: '1366x768', icon: Monitor },
    { label: 'Tablet Landscape', value: '1024x768', icon: Tablet },
    { label: 'Tablet Portrait', value: '768x1024', icon: Tablet },
    { label: 'Mobile Large', value: '414x896', icon: Smartphone },
    { label: 'Mobile Standard', value: '375x667', icon: Smartphone }
  ];

  const validateUrl = (inputUrl) => {
    try {
      const url = new URL(inputUrl.startsWith('http') ? inputUrl : `https://${inputUrl}`);
      return url.href;
    } catch {
      return null;
    }
  };

  const captureScreenshot = async () => {
    if (!url.trim()) {
      setError('Please enter a valid URL');
      return;
    }

    const validUrl = validateUrl(url);
    if (!validUrl) {
      setError('Please enter a valid URL');
      return;
    }

    setLoading(true);
    setError('');
    setSuccess('');

    try {
      const apiUrl = `https://api.screenshotmachine.com/?key=345c85&url=${encodeURIComponent(validUrl)}&dimension=${dimension}&format=png&cacheLimit=0&delay=2000`;
      
      const response = await fetch(apiUrl);
      
      if (!response.ok) {
        throw new Error('Screenshot capture failed');
      }

      const blob = await response.blob();
      const screenshotUrl = URL.createObjectURL(blob);
      setScreenshot(screenshotUrl);
      setSuccess('Screenshot captured successfully!');
    } catch (err) {
      setError('Failed to capture screenshot. Please try again.');
      console.error('Screenshot error:', err);
    } finally {
      setLoading(false);
    }
  };

  const downloadScreenshot = () => {
    if (screenshot) {
      const link = document.createElement('a');
      link.href = screenshot;
      link.download = `screenshot-${url.replace(/[^a-zA-Z0-9]/g, '-')}-${dimension}.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const shareScreenshot = async () => {
    if (screenshot && navigator.share) {
      try {
        const response = await fetch(screenshot);
        const blob = await response.blob();
        const file = new File([blob], `screenshot-${Date.now()}.png`, { type: 'image/png' });
        
        await navigator.share({
          title: 'Website Screenshot',
          text: `Screenshot of ${url}`,
          files: [file]
        });
      } catch (error) {
        console.error('Error sharing:', error);
      }
    }
  };

  useEffect(() => {
    const particles = document.querySelector('.particles');
    if (particles) {
      for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 20 + 's';
        particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
        particles.appendChild(particle);
      }
    }
  }, []);

  return (
    <div className="app">
      <div className="particles"></div>
      
      <header className="header">
        <div className="container">
          <div className="header-content">
            <div className="logo">
              <Camera className="logo-icon" />
              <span className="logo-text">Scrinshot for ownirsv2</span>
            </div>
            <nav className="nav">
              <a href="#features" className="nav-link">Features</a>
              <a href="#pricing" className="nav-link">Pricing</a>
              <a href="#contact" className="nav-link">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      <main className="main">
        <section className="hero">
          <div className="container">
            <div className="hero-content">
              <div className="hero-text">
                <h1 className="hero-title">
                  scrinshot wibsayt sir!
                  <span className="gradient-text"> no wiy</span>
                </h1>
                <p className="hero-description">
                  Pagkuha og nindot, taas nga kalidad nga mga screenshot sa bisan unsang website gamit ang among advanced screenshot API. Pagkuha og nindot, taas nga kalidad nga mga screenshot sa bisan unsang website gamit ang among advanced screenshot API. 
                    </p>
                <div className="hero-stats">
                  <div className="stat">
                    <Star className="stat-icon" />
                    <span className="stat-number">99.9%</span>
                    <span className="stat-label">Uptime</span>
                  </div>
                  <div className="stat">
                    <Zap className="stat-icon" />
                    <span className="stat-number">2s</span>
                    <span className="stat-label">Avg Speed</span>
                  </div>
                  <div className="stat">
                    <Globe className="stat-icon" />
                    <span className="stat-number">100+</span>
                    <span className="stat-label">Countries</span>
                  </div>
                </div>
              </div>
              
              <div className="screenshot-tool">
                <div className="tool-header">
                  <h2 className="tool-title">Try muna sir!</h2>
                  <p className="tool-subtitle">Enter any URL to capture a screenshot</p>
                </div>
                
                <div className="tool-form">
                  <div className="input-group">
                    <Globe className="input-icon" />
                    <input
                      type="text"
                      className="url-input"
                      placeholder="Enter website URL (e.g., google.com)"
                      value={url}
                      onChange={(e) => setUrl(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && captureScreenshot()}
                    />
                  </div>
                  
                  <div className="dimension-selector">
                    <label className="dimension-label">Choose Dimension:</label>
                    <div className="dimension-grid">
                      {dimensions.map((dim) => {
                        const IconComponent = dim.icon;
                        return (
                          <button
                            key={dim.value}
                            className={`dimension-btn ${dimension === dim.value ? 'active' : ''}`}
                            onClick={() => setDimension(dim.value)}
                          >
                            <IconComponent className="dimension-icon" />
                            <span className="dimension-label-text">{dim.label}</span>
                            <span className="dimension-value">{dim.value}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                  
                  <button
                    className="capture-btn"
                    onClick={captureScreenshot}
                    disabled={loading || !url.trim()}
                  >
                    {loading ? (
                      <>
                        <Loader className="btn-icon spinning" />
                        Capturing...
                      </>
                    ) : (
                      <>
                        <Camera className="btn-icon" />
                        Capture Screenshot
                      </>
                    )}
                  </button>
                </div>
                
                {error && (
                  <div className="alert error">
                    <AlertCircle className="alert-icon" />
                    {error}
                  </div>
                )}
                
                {success && (
                  <div className="alert success">
                    <CheckCircle className="alert-icon" />
                    {success}
                  </div>
                )}
                
                {screenshot && (
                  <div className="screenshot-result">
                    <div className="screenshot-header">
                      <h3 className="screenshot-title">Screenshot Result</h3>
                      <div className="screenshot-actions">
                        <button className="action-btn download" onClick={downloadScreenshot}>
                          <Download className="btn-icon" />
                          Download
                        </button>
                        {navigator.share && (
                          <button className="action-btn share" onClick={shareScreenshot}>
                            <Share2 className="btn-icon" />
                            Share
                          </button>
                        )}
                      </div>
                    </div>
                    <div className="screenshot-container">
                      <img src={screenshot} alt="Website Screenshot" className="screenshot-image" />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="features">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Powerful Features</h2>
              <p className="section-subtitle">Everything you need for professional website screenshots</p>
            </div>
            
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon-container">
                  <Camera className="feature-icon" />
                </div>
                <h3 className="feature-title">High Quality Captures</h3>
                <p className="feature-description">Crystal clear screenshots in multiple resolutions up to 4K quality</p>
              </div>
              
              <div className="feature-card">
                <div className="feature-icon-container">
                  <Zap className="feature-icon" />
                </div>
                <h3 className="feature-title">Lightning Fast</h3>
                <p className="feature-description">Average capture time of just 2 seconds with global CDN delivery</p>
              </div>
              
              <div className="feature-card">
                <div className="feature-icon-container">
                  <Globe className="feature-icon" />
                </div>
                <h3 className="feature-title">Global Availability</h3>
                <p className="feature-description">Capture websites from servers worldwide for accurate regional views</p>
              </div>
              
              <div className="feature-card">
                <div className="feature-icon-container">
                  <Monitor className="feature-icon" />
                </div>
                <h3 className="feature-title">Multiple Devices</h3>
                <p className="feature-description">Desktop, tablet, and mobile viewport screenshots for responsive testing</p>
              </div>
              
              <div className="feature-card">
                <div className="feature-icon-container">
                  <Download className="feature-icon" />
                </div>
                <h3 className="feature-title">Easy Download</h3>
                <p className="feature-description">Download screenshots in PNG format with one click</p>
              </div>
              
              <div className="feature-card">
                <div className="feature-icon-container">
                  <Share2 className="feature-icon" />
                </div>
                <h3 className="feature-title">Share Instantly</h3>
                <p className="feature-description">Share screenshots directly through native share API</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
