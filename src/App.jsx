import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
        <header className="App-header">
            <div className="pb-70 pt-50">
                <h1>REST API TEST</h1>

                <form className="flex flex-row justify-center items-center gap-5">
                    <input type="text" placeholder="Enter try path" className="text-18 p5-10 rounded-8 w-250"/>
                    <button className="text-18 font-bold p5-10 hover-pointer rounded-8">
                        TEST
                    </button>
                </form>
            </div>

            <div className="w50 p20-0">
                <h3>Response JSON</h3>

                <div className="json-box p20-0 text-18">
                <pre className="p10-50">
                    <code>
                        {
                            JSON.stringify(
                                {
                                    "name": "John",
                                    "age": 30,
                                    "city": "New York"
                                },
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
