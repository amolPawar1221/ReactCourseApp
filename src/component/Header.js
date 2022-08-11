import React from "react";
import { Card, CardHeader } from "reactstrap";

function Header() {
    return (
        <>
        <Card
    className="my-2, text-center"
    color="primary"
    inverse>
        <CardHeader>
            <h1>Welcome To the Courses world</h1>
            <p>We are going to learn new courses here</p>
    </CardHeader>
    </Card>
        </>
    );
}

export default Header;