export default function (to,next,router ) {
    const isAuthorised= parseInt(localStorage.getItem('isLogin') ?? "0");
        if (isAuthorised) {
        console.log("Yes");
        next();
    }
    else{
        router.push({ path:'/login'});
    }
  }