import HeaderBox from "@/components/HeaderBox";
import TotalBalanceBox from "@/components/TotalBalanceBox";

const Home = () => {
    const loggedIn = { firstName: 'Marco'};

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
            </div>
        </section>
    )
}

export default Home