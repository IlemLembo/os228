"use client";

export default function ProjectCardSkeleton() {
  return (
    <div className="bg-card rounded-lg p-6 shadow-lg border border-border animate-pulse">
      <div className="flex justify-between items-start mb-4">
        <div className="h-6 bg-muted rounded w-3/4"></div> {/* Placeholder for project name */}
        <div className="flex items-center gap-3">
          <div className="h-4 bg-muted rounded w-12"></div> {/* Placeholder for stars */}
          <div className="h-4 bg-muted rounded w-12"></div> {/* Placeholder for forks */}
        </div>
      </div>

      <div className="mb-4">
        <div className="h-4 bg-muted rounded w-full mb-2"></div> {/* Placeholder for description line 1 */}
        <div className="h-4 bg-muted rounded w-5/6"></div> {/* Placeholder for description line 2 */}
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        <div className="h-6 bg-muted rounded w-20"></div> {/* Placeholder for tech tag 1 */}
        <div className="h-6 bg-muted rounded w-24"></div> {/* Placeholder for tech tag 2 */}
        <div className="h-6 bg-muted rounded w-16"></div> {/* Placeholder for tech tag 3 */}
      </div>

      <div className="flex justify-between items-center text-sm text-muted-foreground">
        <div className="h-4 bg-muted rounded w-1/3"></div> {/* Placeholder for author */}
        <div className="h-4 bg-muted rounded w-1/4"></div> {/* Placeholder for language */}
      </div>

      <div className="mt-4 pt-4 border-t border-border">
        <div className="h-4 bg-muted rounded w-1/2"></div> {/* Placeholder for 'View on GitHub' link */}
      </div>
    </div>
  );
}
