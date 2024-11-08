import HeaderBox from "@/components/HeaderBox";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import RightSidebar from "@/components/RightSidebar";

const Home = () => {
    const loggedIn = { firstName: 'Marco', lastName: "Hartz", email: "marcoavhu@gmail.com"};

    return(
        <section className="home">
            <div className="home-content">
                <header className="home-header"> 
                    <HeaderBox 
                        type="greeting"
                        title="Bem vindo"
                        user={ loggedIn?.firstName || "Guest"}
                        subtext="Acesse a gerencie sua conta e transações com eficiência."
                    />
                    <TotalBalanceBox 
                        accounts={[]}
                        totalBanks={1}
                        totalCurrentBalance={1250.00}
                    
                />
                </header>

                RECENT TRANSACTIONS
            </div>
            <RightSidebar 
                user={loggedIn}
                transactions={[]}
                banks={[{currentBalance: 123.50}, {currentBalance: 500.00}]}
                
            />
            
        </section>
    )
}

export default Home