
export interface Milestone {
  title: string;
  date: string;
  description: string;
}

export const loveConfig = {
  // === PERSONAL DETAILS ===
  // Replace with your actual names
  yourName: "Gavin",
  partnerName: "My Love",
  
  // === RELATIONSHIP START DATE ===
  // Set this to when your relationship began (Singapore timezone: +08:00)
  // Format: "YYYY-MM-DDTHH:MM:SS+08:00"
  relationshipStart: "2024-10-11T00:00:00+08:00",
  
  // === VALENTINE'S DATE ===
  valentineDate: "2026-02-14",
  
  // === HEADLINE AND INTRO ===
  heroHeadline: "To My Love",
  heroSubtext: "I was thinking today about how lucky I am that, after all this time, you're still the only person I truly want to be close to. There’s a specific kind of magic in the way we know each other. The way you know exactly what I’m thinking before I say it, and that effortless pull I feel toward you the moment I see you. ou are my greatest addiction, and I’m looking forward to a very long intentional night of showing you exactly what you mean to me.",
  
  // === PHOTO GALLERY ===
  // How many photos are in /public/photos/ ?
  // Photos should be named: photo_1.jpg, photo_2.jpg, photo_3.jpg, etc.
  photoCount: 8,
  
  // === TIMELINE MILESTONES ===
  // Add your relationship milestones here
  milestones: [
    {
      title: "Our First Night",
      date: "October 11, 2024",
      description: "I'll never forget the way I felt the first time I saw you. I didn’t know it then, but that moment would quietly change the rhythm of my life."
    },
    {
      title: "Birthday Visit",
      date: "November 15, 2024",
      description: "You showed up for me in a way no one ever had. That visit meant more than you’ll ever know. In the way you looked at me, celebrated me, and held me close, you made me feel loved."
    },
    {
      title: "First Week Together",
      date: "March 31, 2025",
      description: "Seven days under the same roof, learning each other’s habits, laughter, silence, and warmth. That week felt like the first real glimpse of forever. Falling asleep beside you and waking up to your presence every day made everything feel steady, intimate, and real."
    },
    {
      title: "Our Paint Date",
      date: "April 3, 2025",
      description: "Paint on our hands, color on our clothes, and that soft smile you gave me across the canvas. Between the playful touches and the quiet focus in your eyes, I felt a connection that was deeper than words."
    },
    {
      title: "My First Trip to NY",
      date: "June 21, 2025",
      description: "My first time in New York will always be unforgettable, not because of the city itself, but because I experienced it with you. Spending the entire day in your space, seeing your world up close, and then walking through the city at night by your side felt surreal."
    },
    {
      title: "Birthday and Meeting My Family",
      date: "November 15, 2025",
      description: "Watching you blend into my world, meeting my family, building bonds was surreal. Seeing you embrace the people who shaped me made me appreciate you on a deeper level, knowing you were choosing all of me"
    },
    {
      title: "Brooklyn Bridge Memory",
      date: "June 20, 2024",
      description: "One of my favorite nights with you. Your lips meeting mine like we had nowhere else to be. In that moment, everything felt slower, more intense, like time itself had stopped."
    },
    {
      title: "Watching Our Love Grow",
      date: "January 2026",
      description: "What started as curiosity has deepened into something steady, mature, and undeniable. I’ve loved watching us grow.The way we’ve learned each other, adjusted for each other, and chosen each other over and over again makes this love feel intentional and lasting. I can’t wait to see where we go from here."
    }
  ],
  
  // === EMAIL CONFIGURATION ===
  // For the "Send me your answer" button
  yourEmail: "your.email@example.com", // Replace with your actual email
  emailSubject: "My Valentine's Answer 💐",
  emailBody: "Yes! I'd love to be your Valentine! 💕\n\nLove always,\n",
  
  // === INVITE DETAILS ===
  inviteTitle: "Will You Be My Valentine Baby?",
  inviteMessage: "I hope you liked this. I wanted to try something different. I love you baby",
  inviteDate: "February 14, 2026",
  inviteTime: "7:00 PM",
  inviteLocation: "Can't wait to see you tmr!!!",
};

export default loveConfig;
