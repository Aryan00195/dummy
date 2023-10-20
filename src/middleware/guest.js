export default function ( to,next, router ) {
    const isAuthorised= parseInt(localStorage.getItem('isLogin') ?? "0");
    console.log("isAuth 2", isAuthorised)
    if (isAuthorised) {
        router.push({ path:'/'});
        console.log("Yes");
    }
    else{
        next();
    }
  }