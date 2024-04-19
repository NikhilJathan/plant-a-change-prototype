const apiKey = "{{ secrets.OPENAI_API_KEY }}";

async function main() {
  try {
    const response = await axios.post(
        "https://api.openai.com/v1/completions",
        {
          prompt: "what plants are native to the Greensquare area in Sydney, Australia",
          model: "text-davinci-003",
          temperature: 0,
          max_tokens: 1000,
          top_p: 1,
          frequency_penalty: 0.0,
          presence_penalty: 0.0,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}`,
          }
        }
      );
      const chatbotResponse = response.data.choices[0].text;

    document.getElementById("openai").innerHTML = chatbotResponse;
  }
  catch (error) {
    console.error("Error:", error);
    if (error.response) {
      console.error("Response status:", error.response.status);
      console.error("Response data:", error.response.data);
  }
}
}

  main();