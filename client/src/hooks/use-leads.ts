import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api, type InsertLead } from "@shared/routes";
import { useToast } from "@/hooks/use-toast";

// Although the main CTA is an external link, we might want to track clicks
// or capture emails if the flow changes. Here is the hook structure ready to go.

export function useCreateLead() {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (data: InsertLead) => {
      const res = await fetch(api.leads.create.path, {
        method: api.leads.create.method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      
      if (!res.ok) {
        throw new Error('Failed to submit');
      }
      
      return api.leads.create.responses[201].parse(await res.json());
    },
    onSuccess: () => {
      toast({
        title: "Success!",
        description: "Your interest has been registered.",
      });
    },
    onError: () => {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Something went wrong. Please try again.",
      });
    }
  });
}
