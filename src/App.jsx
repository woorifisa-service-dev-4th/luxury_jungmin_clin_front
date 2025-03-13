import './App.css';
import {useEffect, useState} from "react";

function App() {
    const [response, setResponse] = useState(null);
    const [tryPath, setTryPath] = useState("https://jsonplaceholder.typicode.com/posts");

    const requestApi = async (tryPath) => {
        try {
            const response = await fetch(
                tryPath,
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    }
                }
            );

            if (!response.ok) {
                console.error("Failed to fetch:", response);
                setResponse("Failed to fetch");
            }

            const data = await response.json();
            setResponse(data);
        } catch (error) {
            console.error("Failed to fetch:", error);
            setResponse("Failed to fetch");
        }
    };

    useEffect(() => {
        const fetchData = async () => {
        await requestApi(tryPath);
        };
        fetchData();
    }, []);

    const handleChange = (e) => {
        setTryPath(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("click test");
        console.log(tryPath);
        requestApi(tryPath);
    };

  return (
    <div className="App">
        <header className="App-header">
            <div className="pb-70 pt-50">
                <h1>정민이의 럭셔리한 REST API TEST</h1>

                <form className="flex flex-row justify-center items-center gap-5">
                    <input type="text" placeholder="Enter try path"
                            value={tryPath}
                            onChange={handleChange}
                           className="text-18 p5-10 rounded-8 w-250"/>
                    <button
                        onClick={handleSubmit}
                        className="text-18 font-bold p5-10 hover-pointer rounded-8">
                        TEST
                    </button>
                </form>
            </div>

            <div className="w70 p20-0">
                <h3>Response JSON</h3>

                <div className="json-box p20-0 text-18">
                <pre className="p10-50">
                    <code>
                        {
                            JSON.stringify(
                                response,
                                null,
                                2
                            )
                        }
                    </code>
                </pre>
            </div>
        </div>
        </header>
    </div>
  );
}

export default App;
