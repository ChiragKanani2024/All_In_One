
        const postDetail = document.querySelector("#postDetail");
        const comments = document.querySelector("#comments");
        const showComment = document.querySelector("#showComment");

    
   

    let data ;
    const setPostsDeatil = async ()=>{
                try {
                 data = await  getposts(`posts/${window.location.search.split("")[1]}`);
                let str = '';
                    for (const key in data) {
                        if (key === 'image' || key === 'thumbnail') {
                         str +=   `<tr><td><p>${key}: </p></td><td><img src="${data[key]}"></td></tr>`
                        }else{
                            str += `<tr><td><p>${key}: </p></td><td>${data[key]}</td></tr>`;
                        }
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
        let data = await getposts('comments')
        let id = showComment.dataset.id
         postComment  = data.filter(item => {
            return item['postId'] == id;
        });
        if (postComment.length >1) {
            let str = ` <thead><tr><th colspan="2"> Comments</th></tr></thead><tbody >`;
            if (postComment.length>5) {
                postComment.slice(0,5).forEach(e => {
                    str += `<tr><td>${e.id}</td><td>${e.comment}</td></tr>`
                });
            str += '<tr><td colspan="2">  <button  onclick="showAllComment()">Show All Comment</button></td></tr></tbody>'
            }else{
                postComment.forEach(e => {
                    str += `<tr><td>${e.id}</td><td>${e.comment}</td></tr>`
                });
            str += '</tbody>'

        }
        comments.innerHTML = str;
        }else{
            let str = ` <thead><tr><th colspan="2">All Comments</th></tr></thead><tbody><tr><td colspan="2">No comments Available</td></tr></tbody>`;
            comments.innerHTML = str;
        }
       
    }


    function showAllComment(){
        
        let str = ` <thead><tr><th colspan="2"> Comments</th></tr></thead><tbody >`;
        postComment.forEach(e => {
            str += `<tr><td>${e.id}</td><td>${e.comment}</td></tr>`
        });
        str += '<tr><td colspan="2">  <button  onclick="showCommentrange()">Show Less Comments</button></td></tr></tbody>'
        comments.innerHTML = str;
    }