'use client'

import { useState } from 'react'
import styles from './page.module.css'

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    info: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Thank you for your submission! The search continues...')
    setFormData({ name: '', email: '', info: '' })
  }

  return (
    <div className={styles.container}>
      {/* Header with aged paper texture */}
      <header className={styles.header}>
        <div className={styles.headerBanner}>
          <h1 className={styles.mainTitle}>THE GREAT RODRIGUEZ HUNT</h1>
          <p className={styles.subtitle}>HAVE YOU SEEN THIS MAN?</p>
        </div>
      </header>

      {/* Main content area */}
      <main className={styles.main}>
        {/* Milk Carton Section - The iconic centerpiece */}
        <section className={styles.milkCartonSection}>
          <div className={styles.milkCarton}>
            <div className={styles.milkCartonTop}></div>
            <div className={styles.milkCartonFront}>
              <div className={styles.missingLabel}>
                <h2>MISSING</h2>
              </div>

              <div className={styles.photoPlaceholder}>
                <div className={styles.photoFrame}>
                  <div className={styles.silhouette}>?</div>
                  <p className={styles.photoCaption}>RODRIGUEZ</p>
                </div>
              </div>

              <div className={styles.details}>
                <p><strong>REAL NAME:</strong> Unknown</p>
                <p><strong>LAST SEEN:</strong> Detroit, early 1970s</p>
                <p><strong>ALBUMS:</strong> Cold Fact (1970), Coming From Reality (1971)</p>
                <p><strong>STATUS:</strong> Unknown</p>
              </div>

              <div className={styles.urgentText}>
                <p>IF YOU HAVE ANY INFORMATION</p>
                <p>PLEASE CONTACT US BELOW</p>
              </div>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className={styles.storySection}>
          <div className={styles.storyBox}>
            <h2 className={styles.sectionTitle}>THE MYSTERY</h2>
            <div className={styles.storyContent}>
              <p>
                In the early 1970s, a mysterious musician named Rodriguez recorded two albums
                in Detroit that went virtually unnoticed in the United States. The albums
                disappeared without a trace, and Rodriguez himself vanished from the music scene.
              </p>
              <p>
                But halfway across the world, in South Africa, Rodriguez became a legend.
                His music became the soundtrack of the anti-apartheid movement, more popular
                than the Rolling Stones or Elvis. Yet nobody knew who he was or what happened to him.
              </p>
              <p>
                Rumors spread: Some said he shot himself on stage. Others claimed he immolated
                himself during a concert. Many believed he was dead. But no one knew for certain.
              </p>
              <p className={styles.highlight}>
                <strong>WHO IS RODRIGUEZ? WHERE IS HE? WHAT HAPPENED TO HIM?</strong>
              </p>
            </div>
          </div>
        </section>

        {/* Clues Section */}
        <section className={styles.cluesSection}>
          <h2 className={styles.sectionTitle}>WHAT WE KNOW</h2>
          <div className={styles.cluesList}>
            <div className={styles.clue}>
              <span className={styles.clueNumber}>1</span>
              <div>
                <h3>The Albums</h3>
                <p>Two studio albums released on Sussex Records: "Cold Fact" and "Coming From Reality"</p>
              </div>
            </div>
            <div className={styles.clue}>
              <span className={styles.clueNumber}>2</span>
              <div>
                <h3>Detroit Connection</h3>
                <p>Recorded in Detroit, Michigan. Producer: Dennis Coffey</p>
              </div>
            </div>
            <div className={styles.clue}>
              <span className={styles.clueNumber}>3</span>
              <div>
                <h3>The Lyrics</h3>
                <p>Poetic, socially conscious lyrics about urban life, poverty, and human struggle</p>
              </div>
            </div>
            <div className={styles.clue}>
              <span className={styles.clueNumber}>4</span>
              <div>
                <h3>South African Fame</h3>
                <p>Bootleg copies sold hundreds of thousands. He became a counter-culture icon.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className={styles.contactSection}>
          <div className={styles.formBox}>
            <h2 className={styles.sectionTitle}>HELP US FIND RODRIGUEZ</h2>
            <p className={styles.formIntro}>
              Do you have any information about Rodriguez? Any detail, no matter how small,
              could help solve this mystery. Please share what you know.
            </p>

            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Your Name:</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email">Your Email:</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="info">Information About Rodriguez:</label>
                <textarea
                  id="info"
                  rows={6}
                  value={formData.info}
                  onChange={(e) => setFormData({...formData, info: e.target.value})}
                  placeholder="Please tell us anything you know about Rodriguez - his whereabouts, his real name, or any other details..."
                  required
                />
              </div>

              <button type="submit" className={styles.submitButton}>
                SUBMIT INFORMATION
              </button>
            </form>
          </div>
        </section>

        {/* Songs Section */}
        <section className={styles.songsSection}>
          <h2 className={styles.sectionTitle}>HIS MUSIC</h2>
          <div className={styles.songsList}>
            <div className={styles.album}>
              <h3>Cold Fact (1970)</h3>
              <ul>
                <li>Sugar Man</li>
                <li>Only Good For Conversation</li>
                <li>Crucify Your Mind</li>
                <li>This Is Not A Song, It's An Outburst: Or, The Establishment Blues</li>
                <li>Hate Street Dialogue</li>
                <li>Forget It</li>
                <li>Inner City Blues</li>
                <li>I Wonder</li>
                <li>Like Janis</li>
                <li>Gommorah (A Nursery Rhyme)</li>
                <li>Rich Folks Hoax</li>
                <li>Jane S. Piddy</li>
              </ul>
            </div>
            <div className={styles.album}>
              <h3>Coming From Reality (1971)</h3>
              <ul>
                <li>Climb Up On My Music</li>
                <li>A Most Disgusting Song</li>
                <li>I Think Of You</li>
                <li>Heikki's Suburbia Bus Tour</li>
                <li>Silver Words</li>
                <li>Sandrevan Lullaby - Lifestyles</li>
                <li>To Whom It May Concern</li>
                <li>It Started Out So Nice</li>
                <li>Halfway Up The Stairs</li>
                <li>Cause</li>
                <li>Thanks For Being A Friend</li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <p className={styles.footerText}>
            This is a tribute to the search that captivated fans around the world.
          </p>
          <p className={styles.footerText}>
            The mystery of Rodriguez and the power of music to transcend borders and time.
          </p>
          <p className={styles.footerCredits}>
            "Sugar Man" | "The Greatest Rock Star Who Never Was"
          </p>
        </div>
      </footer>
    </div>
  )
}
