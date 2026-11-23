import { Box } from "lucide-react";
import { Button } from "./ui/Button";
import { useLayoutEffect } from "react";
import { useOutletContext } from "react-router";
import reactRouterConfig from "../../react-router.config";

const Navbar = () => {

  //setting data based on real values
  const {isSignedIn, userName, signIn, signOut} = useOutletContext<AuthContext>()

  const handleAuthClick= async() => {
    if(isSignedIn)
    {
      try{
        await signOut();
      }
      catch (e){
        console.error(`Puter signed in failed ${e}`);
      }
      return;
    }

    try 
    {
      await signIn();
    }
    catch(e)
    {
      console.error(`Puter sign out failed ${e}`);
    }
  };
  

  return (
    <header className="navbar">
      <nav className="inner">
        <div className="left">
          <div className="brand">
            <Box className="logo" />
            <span className="name">
              Rommify
            </span>
          </div>
          <ul className="links">
            <a href="#">Product</a>
            <a href="#">Pricing</a>
            <a href="#">Community</a>
            <a href="#">Enterprise</a>
          </ul>
        </div>

        <div className="actions">
          {isSignedIn ? (
            <>
              <span className="greeting">
                {userName ? `Hi,${userName} ` : "Sign in"}
                <Button size="sm" onClick={handleAuthClick} className="btn">
                  Log out
                </Button>
              </span>
            </>
          ):(
              <>
                <Button onClick={handleAuthClick} size="sm" variant="ghost">Log in</Button>
                <a href="#upload" className="cta">Get Started</a>
              </>
          )}
          
        </div>


      </nav>
    </header>
  )
}

export default Navbar