export const sendEmail = async (data: {
  email: string;
  message: string;
  service: string;
  firstName: string;
  lastName: string;
}): Promise<{ success: boolean; error?: string }> => {
  const controller = new AbortController();
  const signal = controller.signal;

  try {
    const response = await fetch("/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      signal,
    });

    if (!response.ok) {
      throw new Error("Failed to send email");
    }

    return { success: true };
  } catch (error) {
    if ((error as Error).name === "AbortError") {
      console.warn("Request was aborted");
    } else {
      console.error("Error sending email:", error);
    }
    return { success: false, error: (error as Error).message };
  }
};
