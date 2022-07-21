let data= [
    {
      type:"QUALITY",  
      heading: "What should HIM directors prioritize to ensure medical coding quality?",
      Image: "https://blog.fathomhealth.com/hubfs/lightbulb.png",
      subheading: "Staying up-to-date on healthcare changes",
      summery: "As an HIM director, you’re likely looking for ways to reduce inefficiencies to boost your organization’s bottom line and ensure PHI security. ",
      author: "Taylor Ross",
      date: "July 6, 2022",
      id: 1
    },
    {
        type:"INDUSTRY NEWS", 
      headi: "The future of revenue cycle from 3 perspectives: Vendors, providers, and payors",
      Image: "https://blog.fathomhealth.com/hubfs/building-colors.png",
      subheading: "Staffing shortages",
      summery: "Like seemingly every other facet of healthcare, the way we manage the revenue cycle is evolving. ",
      author: "Amit Jayakar",
      date: "June 28, 2022",
      id: 2
    },
    {
        type:"INSIDER", 
      heading: "Four RCM metrics for the healthcare C-suite",
      Image: "https://blog.fathomhealth.com/hubfs/four.png",
      subheading: " an idea of how and where to improve your operations to ensure a healthy revenue cycle",
      summery: "Medical coding quality and accuracy have a massive impact on your organization’s bottom line and revenue cycle. ",
      author: "Andrew Lockhart",
      date: "June 8, 2022",
      id: 3
    },
    {
        type:"INDUSTRY NEWS", 
      heading: "The secret to increasing medical coding accuracy",
      Image: "https://blog.fathomhealth.com/hubfs/accuracy.jpg",
      subheading: " ",
      summery: "With reports indicating denied claims rates are reaching new highs, many medical organizations are scrambling to get their numbers in check. ",
      author: "Taylor Ross",
      date: "May 4, 2022",
      id: 4
    },
    {
        type:"PRESS RELEASE", 
      heading: "Fathom secures investment from Vituity’s Inflect Health",
      Image: "https://blog.fathomhealth.com/hubfs/fathom-inflect-vituity.jpg",
      subheading: "Fathom is the first medical coding automation company to receive investment from a national physician group",
      summery: "SAN FRANCISCO, CA — Fathom, the leader in AI medical coding automation, announced it received a strategic investment from Inflect Health, ",
      author: "Fathom Team",
      date: "April 25, 2022",
      id: 5
    },
    {
        type:"INDUSTRY NEWS", 
      heading: "5 ways medical coding accuracy impacts your revenue cycle",
      Image: "https://blog.fathomhealth.com/hubfs/ways.jpg",
      subheading: "5 ways medical coding accuracy impacts your revenue cycle",
      summery: "Creating a healthy and stable revenue cycle is critical for medical organizations of all shapes and sizes.",
      author: "Amit Jayakar",
      date: "Amit Jayakar",
      id: 6
    },
    {
        type:"ARTIFICIAL INTELLIGENCE", 
      heading: "Artificial intelligence vs. robotic process automation",
      Image: "https://blog.fathomhealth.com/hubfs/andy-kelly-0E_vhMVqL9g-unsplash.jpg",
      subheading: " ",
      summery: "Let’s face it: Healthcare is, in many ways, still an old-fashioned industry. Many patient charts are still housed on paper and stored in manila folders. ",
      author: "Andrew Lockhart",
      date: "April 29, 2020",
      id: 7
    },
    {
        type:"AUTOMATION", 
      heading: "Six ways AI can maximize your revenue cycle",
      Image: "https://blog.fathomhealth.com/hubfs/derek-thomson-NqJYQ3m_rVA-unsplash.jpg",
      subheading: " ",
      summery: "With the advent of artificial intelligence technology and its application in solving some of the most complex challenges of companies and industries around the world,",
      author: "Andrew Lockhart",
      date: "April 22, 2020",
      id: 8
    },
    {
        type:"AUTOMATION", 
      heading: "Internal medical coders, vendors, or intelligent automation?",
      Image: "https://blog.fathomhealth.com/hubfs/guy.jpg",
      subheading: " ",
      summery: "Whenever discussing domestic vs. off-shore medical coding, two questions naturally arise. What does “domestic” really mean?",
      author: "Lisa Fong",
      date: "February 24, 2020",
      id: 9
    },
    {
        type:"MACHINE LEARNING", 
      heading: "3 machine learning applications in healthcare",
      Image: "https://blog.fathomhealth.com/hubfs/glasses.jpg",
      subheading: " ",
      summery: "Thanks to advances in machine learning and the emergence of cloud computing, computer algorithms today are using human-like intelligence to perform high-level tasks with incredible accuracy at a massive scale. ",
      author: "Fathom Team",
      date: "February 14, 2020",
      id: 10
    },
    {
        type:"INDUSTRY NEWS", 
      heading: "Top 10 revenue cycle trends",
      Image: "https://blog.fathomhealth.com/hubfs/future.jpg",
      subheading: "1. A move towards pricing transparency 🔍",
      summery: "There have been public calls for more pricing transparency in healthcare for decades, but limited public interest in an issue that few felt (or could even attribute) acutely.The explosion of high-deductible plans has turned those disparate sparks into a flame. ",
      author: "Andrew Lockhart",
      date: "February 11, 2020",
      id: 11
    }
  ]

  localStorage.setItem("mynewsData",JSON.stringify(data))


let imgHead= document.querySelector("#top_news>img")
imgHead.src=data[10].Image
let h4= document.querySelector("#right>h4")
h4.innerText=data[10].type
let h1= document.querySelector("#right>h1")
h1.innerText=data[10].heading
h1.addEventListener("click",function(){
  console.log(data[10])
  localStorage.setItem("news",JSON.stringify(data[10]))
   window.location.href="./news.html"
})
let h3= document.querySelector("#right>h3")
h3.innerText=data[10].subheading
let p= document.querySelector("#right>p")
p.innerText=data[10].summery







let append=(data)=>{
  let newsContainer=document.getElementById("news_div");
  newsContainer.innerHTML=null;
  let head=document.createElement("h1");
  
  data.forEach((ele)=>{

    let box=document.createElement("div");
    box.setAttribute("id","box")
    let image=document.createElement("img");
    image.src=ele.Image;

    let boxInner=document.createElement("div");
    boxInner.setAttribute("id","boxInner")

    let type=document.createElement("h5");
    type.innerText=ele.type;
    let heading=document.createElement("h2");
    heading.innerText=ele.heading;
    heading.addEventListener("click",function(){
      store(ele)
    })
    let summery=document.createElement("p");
    summery.innerText=ele.summery;

    boxInner.append(type,heading,summery);
    box.append(image,boxInner)
    newsContainer.append(box)


})

}


let store=(ele)=>{

localStorage.setItem("news",JSON.stringify(ele))
window.location.href="./news.html"


}


  let filter=(x)=>{
    
    let filtered=data.filter(function(ele){
     
      return ele.type==x
    })

    console.log(filtered)
    append(filtered)
  }


