 

const posts = [
    { postName: "Post 1", postDetail: "Post 1 Detail" },
    { postName: "Post 2", postDetail: "Post 2 Detail" },
    { postName: "Post 3", postDetail: "Post 3 Detail" }
]

function addPost(value){
    return new Promise((resolve,reject)=>{
        if(value){
            posts.push(value);
            resolve("Yeni Post Başarıyla Eklendi")
        } else {
            reject("ERR")
        }
    })
}

function listPosts(){
    posts.map((value)=>{
        console.log("%s => %s ",value.postName,value.postDetail)
    })
}

async function addPostListPost (newPost) {
    try {
        const flow = await addPost(newPost);
        console.log(flow)
        listPosts()
    } catch(error) {
        console.log(errror)
    }
}

listPosts()

addPostListPost({
    postName: "Post 4",
    postDetail: "Post 4 Detail",
})