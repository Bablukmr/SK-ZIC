import { Button, Result } from "antd";
import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div className="flex justify-center h-screen items-center">
            <Result
                status="404"
                title="404"
                subTitle="Sorry, the page you visited does not exist."
                extra={
                    <Link to="/">
                        <Button type="primary">Back Home</Button>
                    </Link>
                }
            />
        </div>
    );
}
