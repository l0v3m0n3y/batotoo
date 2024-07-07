class batotoo{
    constructor(){
        this.api = "https://batotoo.com"
        this.headers={"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36 Edg/126.0.0.0","x-requested-with": "xmlhttprequest","content-type":"application/json"}
    }
    async register(email,password){
        let req=await fetch(`${this.api}/apo`,{method:"POST",headers: this.headers,body:JSON.stringify({"query":"\n  mutation mut_account_signUp($email: String, $uname: String, $pass0: String, $passt: String) {\n    mut_account_signUp(\n      email: $email,\n      uname: $uname,\n      pass0: $pass0,\n      passt: $passt,\n    ) {\n      err tof int\n    }\n  }\n  ","variables":{"email":email,"uname":"","pass0":"","passt":password},"operationName":"mut_account_signUp"})});
        let json=(req.json())
        return (json);
    }
    async login(email,password){
        let req=await fetch(`${this.api}/apo`,{method:"POST",headers: this.headers,body:JSON.stringify({"query": "\n  mutation mut_account_signIn($uniq: String, $pass: String) {\n    mut_account_signIn(\n      uniq: $uniq,\n      pass: $pass,\n    ) {\n      err tof int\n    }\n  }\n  ","variables": {"uniq": email,"pass": password},"operationName": "mut_account_signIn"})});
        let json=(req.json())
        this.headers["cookie"]=req.headers.get("set-cookie")
        return (json);
    }
    async send_password(email){
        let req=await fetch(`${this.api}/apo`,{method:"POST",headers: this.headers,body:JSON.stringify({"query":"\n  mutation mut_account_newTmpPwd($email: String!, $sender: String) {\n    mut_account_newTmpPwd(\n      email: $email, \n      sender: $sender\n    ) {\n      err\n      tof\n    }\n  }\n  ","variables":{"email":email,"sender":"no_reply_batomail_org"},"operationName":"mut_account_newTmpPwd"})});
        let json=(req.json())
        return (json);
    }
    async send_comment(manga_id,text){
        let req=await fetch(`${this.api}/apo`,{method:"POST",headers: this.headers,body:JSON.stringify({"query":"\n  mutation mut_comment_post_manager($input: CommentPostManager_Input) {\n    mut_comment_post_manager(input: $input) {\n      err\n      commentPost {\n        \nid\ndata {\n  \n\n  id\n  dateCreate\n  is_deleted\n  \n  userId\n\n  content { code, text }\n  \n  p_postId p_postIds\n  \n  userId\n  \n  pageId\n  comicId \n  chapterId\n\n  count_child\n  count_reply\n\n  count_vote_up\n  count_vote_dn\n  count_vote_ab\n\n  userNode{\n    \n  id \n  data {\n    \nid\nname\nuniq\navatarUrl \nurlPath\n\ndateCreate\ndateOnline\n\ngender \nbirth{y m d}\n\nstat_count_comics_normal\nstat_count_comics_others\n\nstat_count_comics_uploaded\nstat_count_comics_modified\n\nstat_count_chapters_normal\nstat_count_chapters_others\n\nstat_count_comment_createds\nstat_count_comment_receives\n\nstat_count_forum_child\nstat_count_forum_reply\n\nstat_count_views_guest\nstat_count_views_login\n\nstat_count_following\nstat_count_followers\n\nstat_warnings_unread\nstat_warnings_readed\n\ncount_reviews\n\nis_adm is_mod is_vip\nis_verified is_deleted\nis_trusted is_muted is_warned is_banned\n\n  }\n\n  }\n\n  comicNode {\n    \nid\ndata {\n  id\n  dbStatus\n  isNormal\n  isHidden\n  isDeleted\n\n  dateCreate datePublic dateModify\n  dateUpload dateUpdate\n  \n  name\n  slug\n  altNames\n\n  authors\n  artists\n  genres\n\n  origLang tranLang\n\n  uploadStatus\n  originalStatus\n\n  originalPubFrom\n  originalPubTill\n\n  readDirection\n\n  summary {\n    code\n    text\n  }\n  extInfo {\n    code\n  }\n  resInfo {\n    code\n  }\n\n  urlPath\n\n  urlCover600\n  urlCover300\n  urlCoverOri\n\n  \n\nstat_is_hot\nstat_is_new\n\nstat_count_follows\nstat_count_reviews\nstat_count_post_child \nstat_count_post_reply\n\nstat_count_mylists\n\nstat_count_votes\nstat_count_notes\nstat_count_emotions {\n  field count\n}\nstat_count_statuss {\n  field count\n}\nstat_count_scores {\n  field count\n}\nstat_count_views {\n  field count\n}\n\nstat_score_avg\nstat_score_bay\nstat_score_val\n\nstat_count_chapters_normal\nstat_count_chapters_others\n\n\n}\n\n  }\n\n  chapterNode{\n    \n  id\n  data {\n    \n\n  id comicId\n\n  dbStatus\n  isNormal\n  isHidden\n  isDeleted\n  isFinal\n  \n  dateCreate\n  datePublic\n  dateModify\n\n  volNum\n  chaNum\n  dname\n  title\n  urlPath\n\n  count_images\n\n  stat_is_new\n\n  stat_count_post_child\n  stat_count_post_reply\n  stat_count_views_login\n  stat_count_views_guest\n  \n  userId\n  userNode {\n    \n  id \n  data {\n    \nid\nname\nuniq\navatarUrl \nurlPath\n\ndateCreate\ndateOnline\n\ngender \nbirth{y m d}\n\nstat_count_comics_normal\nstat_count_comics_others\n\nstat_count_comics_uploaded\nstat_count_comics_modified\n\nstat_count_chapters_normal\nstat_count_chapters_others\n\nstat_count_comment_createds\nstat_count_comment_receives\n\nstat_count_forum_child\nstat_count_forum_reply\n\nstat_count_views_guest\nstat_count_views_login\n\nstat_count_following\nstat_count_followers\n\nstat_warnings_unread\nstat_warnings_readed\n\ncount_reviews\n\nis_adm is_mod is_vip\nis_verified is_deleted\nis_trusted is_muted is_warned is_banned\n\n  }\n\n  }\n\n  }\n\n  }\n\n  urlPath\n\n\n}\nsser_vote_val\nsser_bell_val\n\n      }\n    }\n  }\n  ","variables":{"input":{"content":text,"comicId":manga_id}},"operationName":"mut_comment_post_manager"})});
        let json=(req.json())
        return (json);
    }
    async add_step_email(email,password){
        let req=await fetch(`${this.api}/apo`,{method:"POST",headers: this.headers,body:JSON.stringify({"query":"\n  mutation mut_account_emailAdd($addr:String, $pass:String) {\n    mut_account_emailAdd(\n      addr: $addr, \n      pass: $pass\n    ) {\n      err\n      tof\n    }\n  }\n  ","variables":{"addr":email,"pass":password},"operationName":"mut_account_emailAdd"})});
        let json=(req.json())
        return (json);
    }
    async delete_account(email,password){
        let req=await fetch(`${this.api}/apo`,{method:"POST",headers: this.headers,body:JSON.stringify({"query":"\n  mutation mut_account_deletion($tpwd: String, $addr: String) {\n    mut_account_deletion(\n      addr: $addr, \n      tpwd: $tpwd\n    ) {\n      err\n      tof\n    }\n  }\n  ","variables":{"tpwd":password,"addr":email},"operationName":"mut_account_deletion"})});
        let json=(req.json())
        return (json);
    }
    async step_account(){
        let req=await fetch(`${this.api}/apo`,{method:"POST",headers: this.headers,body:JSON.stringify({"query":"\n  mutation mut_account_profileAdd($name:String, $assoId:Int) {\n    mut_account_profileAdd(\n      name: $name, \n      assoId: $assoId\n    ) {\n      err\n      int\n    }\n  }\n  ","variables":{},"operationName":"mut_account_profileAdd"})});
        let json=(req.json())
        return (json);
    }
}
module.exports = {batotoo};