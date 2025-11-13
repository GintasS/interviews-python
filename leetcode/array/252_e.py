# https://leetcode.com/problems/meeting-rooms/description/
# TOPICS: Array, Sorting


def canAttendMeetings(self, intervals):
    """
    :type intervals: List[List[int]]
    :rtype: bool
    """
    if len(intervals) == 1:
        return True

    for i in range(len(intervals)):
        for y in range(len(intervals)):
            if i == y:
                continue

            start_time_i_meeting = intervals[i][0]
            end_time_i_meeting = intervals[i][1]

            start_time_y_meeting = intervals[y][0]
            end_time_y_meeting = intervals[y][1]

            if (
                start_time_i_meeting <= start_time_y_meeting
                and end_time_y_meeting <= end_time_i_meeting
            ):
                return False
            if (
                start_time_i_meeting < start_time_y_meeting
                and end_time_i_meeting > start_time_y_meeting
            ):
                return False
    return True


def canAttendMeetings2(self, intervals):
    """
    :type intervals: List[List[int]]
    :rtype: bool
    """

    intervals.sort()
    for i in range(len(intervals) - 1):
        if intervals[i][1] > intervals[i + 1][0]:
            return False
    return True
