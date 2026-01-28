function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export async function getDogs() {
  try {
    const response = await fetch("http://127.0.0.1:3005/api/dogs");
    if (!response.ok) {
      throw new Error("Network response was not okay");
    }
    const data = await response.json();

    // wait 1 second before returning
    await sleep(1000);

    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}