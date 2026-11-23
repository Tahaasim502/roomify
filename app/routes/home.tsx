import { ArrowRight, ArrowUpRight, Clock } from "lucide-react";
import Navbar from "../components/Navbar";
import type { Route } from "./+types/home";
import { Button } from "~/components/ui/Button";
import { Layers } from "lucide-react";
import { data } from "react-router";
export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
  <div className="home"> 
    <Navbar />
    <section className="hero">
      <div className="announce">
        <div className="dot">
          <div className="pulse"></div>
        </div>
        <p>Introducing Roomify 2.0</p>
      </div>
      <h1>Design beautiful spaces and bring your vision to life</h1>
      
      <p className="subtitle">
          Build the room you imagined, faster than ever. Drop in your floor plan, and
          our AI agent turns it into a stunning 3D visual that you can share with
          clients, family or friends.
      </p>

      <div className="actions">
        <a href="#upload" className="cta">
          Start Building <ArrowRight className="icon" />
        </a>

        <Button variant="outline" size="lg" className="demo">Watch Demo</Button>
      </div>

      <div className="upload-shell" id="upload">
        <div className="grid-overlay"></div>
        <div className="upload-card">
          <div className="upload-head">
            <div className="upload-icon">
              <Layers className="icon" />
            </div>
            <h3>Upload your floor plan</h3>
            <p>Supports JPG and PNG formats up to 10MB</p>
          </div>
          <p>Upload Image</p>
        </div>
      </div>


    </section>

    <section className="projects">
      <div className="section-inner">
        <div className="section-head">
          <div className="copy">
            <h2>Projects</h2>
            <p>Your latest work and shared community projects are all stored in one place.</p>
          </div>
        </div>

        <div className="projects-grid">
            <div className="project-card group">
              <div className="preview">
                <img src="https://roomify-mlhuk267-dfwu1i.puter.site/projects/1770803585402/rendered.png" alt="Project Preview"></img>
                <div className="badge">
                  <span>Community</span>
                </div>
              </div>

              <div className="card-body">
                <div>
                  <h3>Demo Project</h3>
                  <div className="meta">
                    <Clock size={12} />
                    <span> {new Date('2026-11-23').toLocaleDateString('en-GB')}</span>
                    <span>By Group 1</span>
                  </div>
                </div>

                <div className="arrow">
                  <ArrowUpRight size={18}/>
                </div>
              </div>

            </div>
        </div>
      </div>
    </section>
  </div>
  
  )
}
