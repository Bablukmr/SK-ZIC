import { Skeleton } from "antd"

export default function LoadingAni() {
    return (
        <div className="w-[60%] ml-[20%] h-full  bg-[greeen] flex items-center">
            <Skeleton
                avatar
                paragraph={{
                    rows: 4,
                }}
                active
            />
        </div>
    )
}
