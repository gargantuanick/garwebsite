export default function ImageNotice() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-muted/50 backdrop-blur-sm rounded-lg">
      <div className="bg-background p-4 rounded-md text-center max-w-xs">
        <p className="text-sm font-medium">
          Please replace this placeholder with the actual image from{" "}
          <a href="https://gargantua.llc" className="text-primary underline" target="_blank" rel="noreferrer noopener">
            gargantua.llc
          </a>
        </p>
      </div>
    </div>
  )
}
