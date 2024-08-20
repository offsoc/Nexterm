import ServerObject from "@/pages/Servers/components/ServerList/components/ServerObject";
import CollapsibleFolder from "./CollapsibleFolder.jsx";

const ServerEntries = ({ entries, nestedLevel, setRenameStateId }) => {
    return (
        <>
            {entries.map(entry => {
                if (entry.type === "folder") {
                    return (
                        <CollapsibleFolder
                            id={entry.id}
                            key={"f"+entry.id}
                            name={entry.name}
                            entries={entry.entries}
                            renameState={entry.renameState}
                            setRenameStateId={setRenameStateId}
                            nestedLevel={nestedLevel}
                        />
                    );
                } else if (entry.type === "server") {
                    return (
                        <ServerObject
                            id={entry.id}
                            key={"s"+entry.id}
                            name={entry.name}
                            nestedLevel={nestedLevel}
                            icon={entry.icon}
                        />
                    );
                }
                return null;
            })}
        </>
    );
};

export default ServerEntries;