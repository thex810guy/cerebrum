import {
  NavigationMenu, // Container for navigation menu
  NavigationMenuContent, // Dropdown Content
  NavigationMenuItem, // Item in the navigation menu
  NavigationMenuLink, // a Link?
  NavigationMenuList, // another container under NavigationMenu
  NavigationMenuTrigger,
  navigationMenuTriggerStyle, // Under item, opens a dropdown
} from "@/components/ui/navigation-menu"
import H3 from "@/font/H3"
import icon from "@/assets/cerebrum-icon.svg"
import { cn } from "@/lib/utils"
import React from "react"
import { Button } from "./ui/button"
import { NavLink } from "react-router"

function Navbar() {
  return (<div className="w-full shadow-sm h-18 px-8 py-4">
    <div className="flex items-center justify-between w-full h-full">
      <NavLink to="/" className="h-full flex items-center gap-2">
        <img className="h-full" src={icon} alt="icon" />
        <H3 className="text-slate-900">Cerebrum</H3>
      </NavLink>

      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <a
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-slate-100 p-6 no-underline outline-none"
                    >
                      <div className="mb-2 mt-4 text-lg font-medium">
                        Getting Started
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        Create an account on Cerebrum to ace all your exams!
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                <ListItem title="Account Management">
                  Easily sign up for Cerebrum to start studying now!
                </ListItem>
                <ListItem title="AI Integration">
                  Improve your productiviy using integrated DeepSeek AI.
                </ListItem>
                <ListItem title="Open Source & Free">
                  Constant addition of tools and contribution from the community, completely free!
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            
              <NavigationMenuLink href="https://www.github.com/thex810guy/cerebrum" className={navigationMenuTriggerStyle()}>
                Contribute
              </NavigationMenuLink>
            
          </NavigationMenuItem>

          <NavigationMenuItem>
            {/* <Link href="/docs" legacyBehavior passHref> */}
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Donations
              </NavigationMenuLink>
            {/* </Link> */}
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <div className="h-full flex items-center gap-4">
        <NavLink to="/log-in"><Button variant="outline">Login</Button></NavLink>
        <NavLink to="/sign-up"><Button>Sign Up</Button></NavLink>
      </div>
    </div>
  </div>)
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

export default Navbar
