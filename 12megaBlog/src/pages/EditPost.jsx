import React, {useState, useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Container, PostForm } from '../components'
import appwriteService from '../appwrite/config'

function EditPost() {
    const [posts, setPosts] = useState([])
    const navigate = useNavigate()
    const {slug} = useParams()

    useEffect(() => {
        if(slug){
            appwriteService.getPosts({slug}).then((post) => {
                if (post) {
                    setPosts(post)
                }
            })
        } else{
            navigate('/')
        }
    }, [slug, navigate]);

  return posts ? (
    <div className="py-8">
        <Container>
            <PostForm post={posts}/>
        </Container>
    </div>
  ) : null
}

export default EditPost