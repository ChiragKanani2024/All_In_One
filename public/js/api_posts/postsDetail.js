
        const postDetail = document.querySelector("#postDetail");
        const comments = document.querySelector("#comments");
        const showComment = document.querySelector("#showComment");

    
   

    let data ;
    const setPostsDeatil = async ()=>{
                try {
                 data = await  getposts(`posts/${window.location.search.split("")[1]}`);
                let str = '';
                    for (const key in data) {
                      
                            str += `<tr><td><p>${key}: </p></td><td>${data[key]}</td></tr>`;
                        
                    }
                   postDetail.innerHTML = str;
                   showComment.dataset.id = data['id']
                } catch (error) {
                    console.log(error)
                }

    }
    setPostsDeatil();

    let postComment;
    showComment.addEventListener("click",showCommentrange)

   async function showCommentrange(){
       let id = showComment.dataset.id
        let postComment = await getposts(`posts/${id}/comments`)
        
        if (postComment.length >1) {
            let str = ` <thead><tr><th colspan="3"> Comments</th></tr></thead><tbody >`;
            if (postComment.length>5) {
                postComment.slice(0,5).forEach(e => {
                    str += `<tr><td>${e.id}</td><td>${e.name}</td><td>${e.body}</td></tr>`
                });
            str += '<tr><td colspan="3">  <button  onclick="showAllComment()">Show All Comment</button></td></tr></tbody>'
            }else{
                postComment.forEach(e => {
                    str += `<tr><td>${e.id}</td><td>${e.name}</td><td>${e.body}</td></tr>`
                });
            str += '</tbody>'

        }
        comments.innerHTML = str;
        }else{
            let str = ` <thead><tr><th colspan="3">All Comments</th></tr></thead><tbody><tr><td colspan="2">No comments Available</td></tr></tbody>`;
            comments.innerHTML = str;
        }
       
    }


    function showAllComment(){
        
        let str = ` <thead><tr><th colspan="3"> Comments</th></tr></thead><tbody >`;
        postComment.forEach(e => {
            str += `<tr><td>${e.id}</td><td>${e.name}</td><td>${e.body}</td></tr>`
        });
        str += '<tr><td colspan="3">  <button  onclick="showCommentrange()">Show Less Comments</button></td></tr></tbody>'
        comments.innerHTML = str;
    }