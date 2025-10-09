import { Box, Drawer, List, ListItem, ListItemButton } from "@mui/material"
import { sidebarLinks } from "../../data/sidebar"
import { map } from "lodash"
import logo from "assets/logo.png"
import { useNavigate } from "react-router"

const Sidebar = ({
    open,
    onClose
}) => {

    const navigate = useNavigate()

    const navTo = (path) => {
        navigate(path)
        onClose()
    }

    return (
        <Drawer
            open={open}
            onClose={onClose}
        >
            <Box
                sx={{
                    background: "black",
                    height: "100vh",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "start",
                    justifyContent: "start",
                }}
            >
                <img src={logo} height="108px" style={{ alignSelf: "center", marginTop: "16px" }}></img>
                <List>
                    {
                        map(sidebarLinks, (link) => (
                            <ListItem key={link.title} disablePadding>
                                <ListItemButton sx={{ fontWeight: "bold", fontSize: "24px" }} onClick={() => navTo(link.link)}>{link.title}</ListItemButton>
                            </ListItem>
                        ))
                    }
                </List>
            </Box>
        </Drawer >
    )
}

export default Sidebar