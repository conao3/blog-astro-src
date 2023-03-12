type SimpleCalloutBlockProps = {
  title: string;
  children: React.ReactNode;
};

export function SimpleCalloutBlock(props: SimpleCalloutBlockProps) {
  const divheader = (
    <div style={{
      backgroundColor: "rgb(255, 221, 214)",  // Red 200
      padding: "0.25rem",
      fontWeight: "bold",
    }}>{props.title}</div>
  )
  const divcontent = (
    <div style={{
      padding: "0.25rem",
    }}>{props.children}</div>
  )

  return <>
    <div style={{
      borderRadius: "0.25rem",
      border: "1px solid",
      borderColor: "rgb(213, 213, 213)",  // Gray 300
      borderLeft: "5px solid",
      borderLeftColor: "rgb(247, 92, 70)",  // Red 800
    }}>
      {divheader}
      {divcontent}
    </div>
  </>
}
