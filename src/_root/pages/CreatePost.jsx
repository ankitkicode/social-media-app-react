
import PostForm from './forms/PostForm';

const CreatePost = () => {


  return (
    <div className='flex flex-1 h-full'>
      <div className="common-container">
        <div className='max-w-5xl flex-start gap-3 justify-start w-full'>
          <img src="/public/assets/icons/add-post.svg" width={25} height={25} alt="post" />
          <h2 className='h3-bold md:h2-bold w-full text-left'>Create Post</h2>
        </div>
       <PostForm/>
      </div>
    </div>
  );
}

export default CreatePost;
