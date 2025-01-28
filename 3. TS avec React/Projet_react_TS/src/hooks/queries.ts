import { useQuery } from "@tanstack/react-query";
import { fetchComments } from "@api/commentsApi";

export function useComments() {
    return useQuery({
        queryKey: ["showComments"],
        queryFn: fetchComments
    })
}