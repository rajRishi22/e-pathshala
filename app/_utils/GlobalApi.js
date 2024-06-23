const MASTER_URL="https://api-ap-south-1.hygraph.com/v2/"+process.env.NEXT_PUBLIC_HYGRAPH_API_KEY+"/master"
import { gql, request } from 'graphql-request'
const getAllCourseList=async()=>{
    const query=gql`
  query MyQuery {
  courseLists {
    author
    name
    id
    free
    description
    demoUrl
    banner {
      url
    }
    chapter {
      ... on Chapter {
        id
        name
        video {
          url
        }
      }
    }
    sourceCode
    totalChapters
    tag
    slug
  }
}`

const result=await request(MASTER_URL,query);
return result;
}

const getCourseById=async(courseId)=>{
  const query=gql`
  query MyQuery {
  courseLists {
    author
    name
    id
    free
    description
    demoUrl
    banner {
      url
    }
    chapter {
      ... on Chapter {
        id
        name
        video {
          url
        }
      }
    }
    sourceCode
    totalChapters
    tag
    slug
  }
  courseList(where: {slug: "`+courseId+`"}) {
    author
  }
}
`
const result=await request(MASTER_URL,query);
return result;
}
const getSideBanner=async()=>{
  const query=gql`
  query GetSideBanner {
  sideBanners {
    id
    name
    banner {
      id
      url
    }
    url
  }
}
`
const result=await request(MASTER_URL,query);
return result;
}

export default{
    getAllCourseList,getSideBanner,getCourseById
}