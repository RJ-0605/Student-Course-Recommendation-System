import img from '../images/teachers.jpg';
import img1 from '../images/focusedguy.jpg';
import img2 from '../images/cat.jpg';
import img3 from '../images/couples.jpg';
// import img4 from '../images/flame.jpg';

const __posts = [
  {
    img: img,
    id: "001",
    title: "Become an instructor",
    subtitle: "Top instructors from around the world teach millions of students on Noe_IT. We provide the tools and skills to teach what you love.",
    content: `Our team embraces Noe_IT’s mission to improve lives through learning. Employees enjoy unlimited access to Noe_IT courses, a yearly uLearn stipend, office-wide learning fairs, a monthly Drop Everything And Learn (DEAL) hour, and access to a state-of-the-art production studio where they can create their own Noe_IT courses

              Currently the  company has produced trained personnel who earn  upwards of $800 million annually, with over 4,600 firms in operation and the majority of those firms concentrated in the West, Mid-Atlantic and Southeast regions of the United States. 
              It’s true that larger studios are facing diminishing returns and the industry as a whole is slated to decline in the next decade, but that is exactly what makes this an exciting time for entrepreneurs.

              There will always be a need for professional sound recording equipment, and with so many young artists turning to the internet for exposure, the demand for the equipment – if not the corporate face behind it – is greater than ever. In addition, many advertising firms are using the internet as a new medium of expression, 
              creating marketing campaigns that are slick, fun and professional – more than just the commercials of the past. For these entities, recording facilities as well as post-production expertise are essential to their branding.
          `,
    upvotes: 10,
    downvotes: 4,
    comments: ["this is a comment on the first post"]
  },
  {
    img: img1,
    id: "002",
    title: "Noe_IT for Business",
    subtitle: "Get unlimited access to 5,000+ of Noe_IT’s top courses for your team.",
    content: `See why leading organizations choose Noe_IT for Business as their destination for employee learning.
              People don’t join Noe_IT to do a job; they come to build a career. We all benefit when every employee is supported in developing their skills. Starting with robust onboarding, we offer lots of homegrown workshops and trainings so people can reach their professional goals, including Feedback is Fuel, Career Navigators, and Learn to Lead..

              Moreover, rising consumer awareness regarding child health is boosting the sales of these products, thereby augmenting industry growth. Manufacturers, with the support of government and NGOs, have been promoting baby hygiene,
               which in turn will fuel the demand for various cosmetics and toiletries like skin, hair care, and other products. Baby food is the second-largest segment and is expected to gain significant share over the forecast period.
           `,
    upvotes: 0,
    downvotes: 0,
    comments: []
  },
 ]

// get all posts from the post variable
// returns an array of posts
export function getAllPosts() {
  return __posts;
}

// add a post to the post variable
// return a post object
export function getPostById( post_id ) {
  return __posts.filter( (post) => post.id === post_id )[0];
}

export function addNewComment( post_id, comment ) {
  if(comment) {
    getPostById(post_id).comments.unshift(comment);
    alert("comment added")
  }
}

export function upvotePost( post_id ) {
  getPostById(post_id).upvotes++;
}

export function downvotePost ( post_id ) {
  getPostById(post_id).downvotes++;
}

export function createNewPost(title, sub_title, image, content, callback) {
  const newPost = {};

  newPost.title = title;
  newPost.subtitle = sub_title;
  newPost.content = content;
  newPost.img = image;
  newPost.comments = [];
  newPost.id = getNewId()

  __posts.unshift(newPost);

  callback();
}

function getNewId() {
  let postLength = __posts.length + 2;
  postLength = "" + postLength + "";
  while(postLength.length < 3) {
    postLength = "0" + postLength;
  }

  return postLength;
}
