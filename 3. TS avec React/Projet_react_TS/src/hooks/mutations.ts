import { deleteComments, addLikeToComment } from "@api/commentsApi";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useDeleteComment() {
    const queryClient= useQueryClient();

    return useMutation({
        mutationFn: deleteComments,
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ["showComments"]})
        }
    })
}

export function useLikeComment() {
    const queryClient= useQueryClient();

    return useMutation({
        mutationFn: addLikeToComment,
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ["showComments"]})
        }
    })
}